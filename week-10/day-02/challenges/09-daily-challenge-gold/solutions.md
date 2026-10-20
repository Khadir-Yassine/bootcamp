# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Birthday cake

Enter a birthdate as DD/MM/YYYY or use `--birthdate 29/02/2000`. The program calculates completed years relative to today, including whether this year’s birthday has occurred, and rejects future dates. The candle count is age modulo 10. A Gregorian leap birth year prints **two cakes**; other birth years print one. A last digit of zero correctly prints no candles. Calendar leap rules include century exceptions.

