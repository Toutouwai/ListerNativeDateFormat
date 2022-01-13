# Lister Native Date Format

Allows the date format for "created", "modified" and "published" columns to be set within a Lister or Lister Pro instance.

![Lister Native Date Format](https://user-images.githubusercontent.com/1538852/149245874-c561f311-e69d-4424-aa43-b7ab93bd5c9d.gif)

## Why?

Lister formats the "created", "modified" and "published" columns as relative time strings and doesn't provide an easy way to change this without writing code. Sometimes a value like "3 weeks ago" is not precise enough and you want to see an exact date/time in these columns, perhaps only temporarily before switching back to a relative date.

## Details

An icon is added near the top right of the Lister that reveals a dropdown where you can select from a list date formats that you define in the module config.

The Lister will remember your chosen date format the next time you visit the Lister. If you have Lister Pro installed then each Lister Pro instance will remember the date format previously set for that instance.

## Configuration

In the "Date options" field in the module config, enter a list of date formats that are compatible with [wireDate()](https://processwire.com/api/ref/functions/wire-date/), one format per line.

The default date format used by Lister is "rel".

![Date options](https://user-images.githubusercontent.com/1538852/149245884-9e03e3e8-3f12-4b27-ac9e-a310d9ff266e.png)
