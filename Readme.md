For a web view of the data, visit https://dukeiscreating.github.io/wof-data/

# Data Formats

## Human-Readable Formats

HTML format files are located in the docs folder and are hosted as [github pages](https://dukeiscreating.github.io/wof-data/).

## Machine-Readable Formats

These are formats suitable for all of your programs and scripts that you write.

The [Machine](Machine) folder contains machine-readable formats for the files.

Only tab-delimited is offered for now, but more formats such as json may be added in the future if demand arises.

Why tab delimited as a first interchange format? Because it's 1st-grade easy to parse purely tabular data with it and it rarely requires escape character sequences. Often the best solutions are the simplest.

# Contributions, Corrections, and Suggestions

If you notice any errors in this data, feel free to open an issue. I will investigate as time permits and make corrections as necessary.

Likewise, if there is a piece of information you would like to see included in this database, feel free to open an issue, though no guarantees are given that your suggested data element will be added.

Do not request that I add specific seasons or episodes. If it's not in here or in my WIP list, I don't have access to it. If it's in my "Not Started" list, I'll get to it when I get to it.

Please note that at this time, I prefer to personally verify all data via source video and recaps. This may open up over time. So while I am not opposed to receiving help, if I recieve submissions of data, it may take me some time to verify and merge the updates.

# Notes

## About Denormalized Episode IDs

Note that I have intentionally included denormalized information about episode references by including contestant names.

In case of any ambiguity between contestant names, episode numbers, and air dates, the Contestant Names are to be considered most authoritative within my data.

I've found that while Episode numbers are a more convenient ID, the list of contenstants in the episode makes a more authoritative ID as sources can differ on episode numbering for various good reasons documented elsewhere, but the list of contenstants present on camera in an episode is absolutely immutable. So for clarity, I always try to refer to episodes in data using season, episode number, air date, and contenstants to help settle any ambiguity.

This poses minor issues if episodes are renumbered due to new learnings, but we'll deal with it when it happens.

There is also the small possibility that multiple episodes exist with the same contestant names in the same order. These should not occur near enough to each other to cause ambiguity, and season number can likely be used to disambiguate in this case.

