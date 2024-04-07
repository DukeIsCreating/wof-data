# Duke's Wheel of Fortune Information Database

As a fan of the game, I have been compiling gameplay-related information about the game, mainly for personal use at home. However, I'm more than willing to share the fruits of my research here.

# Chaos Disclaimer

Please note that as of now everything is in a preliminary state. Schemas, folder layouts, etc. are subject to change based on what works and what doesn't.

# Data Sets

## [Wheel-Prizes](Wheel-Prizes.md)

Contains a database of wheel prizes offered.

For each prize, I have attempted to capture:
- the Episode and Round in which the prize was added to the wheel
- Which prize wedge was used, including variant information
- Which prize bed music was used
- The stated value of the prize
- An abbreviation of the prize plug describing the prize
- Any other miscellaneous notes.

# Data Formats

## Human-Readable Formats

The main .md files in this folder are human-viewable (with markdown reader) tabular presentations of the data.

Other human-viewable formats such as html, pdf, etc. might be added in the future if interest arises.

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

## About Wedge Variants

There are SO MANY wedge variants. A new wedge variant is specified whenever a sample of a prize wedge is found that has discernable differences in typography or positioning of the letters on the prize wedge.

This can be challenging, because differences in video quality (especially color/brightness bleed), angle of shot, and lighting differences can cause the false perception of discernable differences. All I can say is that I've done my best, and if things need to be regrouped its easy enough to do.

Variants are named by the text on the wedge, the season they first occur in, and if necessary, a single letter qualifier discerning variant when multiple variants of the same wedge text appear in a season. These name elements are separated by a pin (-). For Example:

```
RING-S1
TRIP-S1-A
TRIP-S1-B
```
It should happen infrequently, but if it is found that a wedge variant appeared in an earlier season than originally thought, the variant name will be updated to reference the correct initial season.


# Credits

My information is compiled from several sources:

Foremost, the Buy A Vowel Boards and its members (https://buyavowel.boards.net/) have been an indispensible source of information, including but not limited to episode recaps, puzzles, and wheel layouts.

The Wheel of Fortune History Fandom (https://wheeloffortunehistory.fandom.com) has also been a valuable source of various information.

And lots of fun time analyzing episode video.

The information I have compiled here regards a series of public contests, and I claim no ownership or copyright over the data contained within.

Having said that, in addition to the efforts of those above, I too have put a lot of personal time into compiling this information. If you find it useful and/or redistribute it, please give credit where it is due. You may simply credit me as "Duke".

# Disclaimers

Wheel of Fortune is a registered trademark of Califon Productions, Inc.

No association is claimed with Califon Productions, Inc., Sony Pictures, the official Wheel of Fortune franchise, or any of its affiliates, and no association should be inferred.

Do not ask me for copyrighted materials such as episode videos, artwork, or music; I will not respond.
