import json
import os

if __name__ == '__main__':
    dirname = 'archive'
    filenames = []
    data = {}
    for year in os.listdir(dirname):
        if year.startswith('.'):
            continue

        dirname_year = os.path.join(dirname, year)
        for month in os.listdir(dirname_year):
            if month.startswith('.'):
                continue

            dirname_year_month = os.path.join(dirname_year, month)
            for filename in os.listdir(dirname_year_month):
                if filename.startswith('.'):
                    continue

                # store each filename (sort by date later)
                if 'bio' not in filename and '_jp' not in filename:
                    filenames.append(filename[:-3])

                # store metadata about each file
                filepath = os.path.join(dirname_year_month, filename)

                with open(filepath, 'r') as f:
                    header = f.readline()
                    if header[0] != '#':
                        continue

                    full_text = [line.rstrip() for line in f]
                    preview = ' '.join(full_text)[:250]+'...'

                    data[filename] = {
                        'header': header[1:].lstrip(),
                        'preview': preview
                    }

    data['filenames'] = sorted(filenames, reverse=True)

    with open('js/fileloader_helper.js', 'w') as w:
        w.write("const file_data = %s;" % json.dumps(data))
