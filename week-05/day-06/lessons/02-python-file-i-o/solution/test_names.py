import unittest,tempfile,contextlib,io
from pathlib import Path
from names import transform
class NamesTest(unittest.TestCase):
    def test_file_read_and_transformation(self):
        with tempfile.TemporaryDirectory(dir=Path(__file__).parent) as folder:
            source=Path(folder)/'names.txt';source.write_text('Darth\nLuke\nLea\nLuke\nDarth\n',encoding='utf-8')
            with contextlib.redirect_stdout(io.StringIO()) as output:
                result=transform(source,'Yassine')
            self.assertIn('Luke SkyWalker',result.read_text());self.assertTrue(result.read_text().endswith('Yassine\n'));self.assertIn("'Luke': 2",output.getvalue());self.assertNotIn('SkyWalker',source.read_text())
if __name__=='__main__':unittest.main()
