import os
import sys


def main(argv):
  if len(argv) < 2:
    return

  folder_path = argv[1]

  os.makedirs(folder_path, exist_ok=True)

  folders = [
    'components',
    'hooks',
    'models',
  ]

  for folder in folders:
    try:
      os.mkdir(os.path.join(folder_path, folder))
      print(f'[!] Folder "{folder}" created in "{folder_path}"')
    except FileExistsError as e:
      print(f'[!] Folder "{folder}" already exists in "{folder_path}"')


if __name__ == '__main__':
  argv = sys.argv
  main(argv)
