import os
import sys
import tempfile

codes = {
    200: 'success',
    404: 'file not found',
    400: 'error',
    408: 'timeout'
}

lang_opts = {
    'python': {
        'compile_file': None,
        'compile_cmd': None,
        'run_file': 'src.py',
        'run_cmd': 'python'
    },
    'c++': {
        'compile_file': 'src.cpp',
        'compile_cmd': 'g++ -lm -lpthread -O3 -std=c++17',
        'run_file': 'a.out',
        'run_cmd': './a.out'
    },
    'nodejs': {
        'compile_file': None,
        'compile_cmd': None,
        'run_file': 'src.js',
        'run_cmd': 'node src.js'
    }
}
out_file = 'out.txt'
in_file = 'input.txt'


def compile_code(file, lang):
    global lang_opts
    if lang_opts[lang]['compile_cmd'] is None:
        return 200
    if os.path.isfile(file):
        compile_cmd = lang_opts[lang]['compile_cmd']
        os.system(f'{compile_cmd} {file}')
        if os.path.isfile('a.out'):
            return 200
        else:
            return 400
    else:
        return 404


def run(input_buff, lang):
    run_file = lang_opts[lang]['run_file']
    run_cmd = f'{lang_opts[lang]["run_cmd"]} {run_file}'
    res = os.system(f'{run_cmd} < {input_buff} > {out_file}')

    if res == 0:
        return 200
    elif res == 31744:
        return 408
    else:
        return 400


def main():
    params = sys.argv
    print(params)
    job_id = params[1]
    file = params[2]
    path = os.path.join(tempfile.gettempdir(), job_id)
    file = os.path.join(path, file)
    os.chdir(path)
    lang = params[3]
    status = compile_code(file, lang)
    if status == 200:
        status = run(in_file, lang)
    print(codes[status])


if __name__ == '__main__':
    main()
