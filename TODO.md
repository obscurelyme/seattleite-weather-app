### Parse today/tonight's forecast into a single weather period

Currently, we are returning a separate day and night weather forecast.\
In order to display a more compact view for the end user, I will need to parse\
the given periods and combine the day/night cycles into a single period that\
could better achieve this.

It could be worth examining the `endTime` property and `startTime` of the next\
period and see if they fall within the same day.
