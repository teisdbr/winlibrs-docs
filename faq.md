---
title: LIBRS Frequently Asked Questions
layout: default
permalink: /faq
---

# LIBRS FAQ

This page contains the questions and responses we've gotten from vendors and users over the years about LIBRS. This is an ever-growing list, so if you don't see an answer you need feel free to reach out. 

___

## LIBRS Overview
* <a href="#what-is-librs">What is LIBRS?</a>
  * <a href="#benefits-of-using-librs">Benefits of Using LIBRS</a>
  * <a href="#can-i-buy-a-librs-certified-rms">Can I Buy a LIBRS Certified RMS?</a>
* <a href="#librs-certification">LIBRS Certification</a>
  * <a href="#certification-requirements"> Certification Requirements</a>
  * <a href="#certification-process">Certification Process</a>
* <a href="#how-to-use-librs">How to Use LIBRS</a>
  * <a href="#getting-started">Getting Started</a>
  * <a href="#submitting-a-file">Submitting a File</a>
  * <a href="#reports">Reports</a>

## Administrative Details
* <a href="#how-dates-work">How Dates Work</a>
  * <a href="#reporting-periods-and-out-of-sequence">Reporting Periods and Out of Sequence</a>
  * <a href="#incident-dates-making-modifications-and-on-which-submission-they-appear">Incident Dates, Making Modifications, and on Which Submission They Appear</a>
* <a href="#how-to-submit-data">How to Submit Data</a>
  * <a href="#ftp-file-structure">FTP File Structure</a>
  * <a href="#how-to-resubmit-data-or-update-existing-incidents">How to Resbumit Data, or Update Existing Incidents</a>

## Questions and Answers
* <a href="#questions-from-vendors">Questions We've Gotten from Vendors</a>
  * <a href="#which-incidents-to-send">What Incidents should I send you?</a>
  * <a href="#should-i-send-duplicate-nibrs-codes">Should I send Multiple Offenses if they're the sane NIBRS Code?</a>
  * <a href="#segment-questions">Segment Questions</a>
    * <a href="#offenses-segment-20">Offenses: Segment 20</a>
    * <a href="#properties-segments-30-31-32-and-33">Properties: Segments 30, 31, 32, and 33</a>
    * <a href="#offenders-segments-40-and-41"> Offenders: Segments 40 and 41</a>
    * <a href="#victims-segments-50-51-and-52">Victims: Segments 50, 51, and 52</a>
* <a href="#what-is-victim-was-offender-and-when-do-i-use-it">What is "Victim Was Offender" and When do I Use It?</a>
* <a href="#what-is-an-unknown-offender">What is an Unknown Offender? When is it supposed to be used?</a>
* <a href="#when-is-a-person-working-at-a-business-a-victim-and-when-is-the-business-a-victim">When is a Person who Works at a Business the Victim, and when is the Business Itself the Victim?</a>
* <a href="why-does-kidnapping-involve-a-property">Why Does Kidnapping Involve a Property?</a>
* <a href="how-case-statuses-change-when-arrests-are-made">If a case has two or more Suspects and only one of them is arrested as of yet, would the case status need to stay “Pending Investigation” or “Cleared by Arrest.” How will this be reported to the State?</a>
* <a href="what-data-is-pulled-from-our-supplemental-reports">What Information do you pull from Supplemental Reports?</a>

## Offense-Specific Questions and Answers
* <a href="#allowable-assault-injury-types-and-weapons">What kinds of Injury Types can I use with the different kinds of Assaults?</a>


## Everything Flat File
* <a href="#flat-files-and-troubleshooting">Flat Files and Troublshooting</a>
  * <a href="#general-flat-file-formatting-requirements">General Flat File Formatting Requirements</a>
    * <a href="#how-to-solve-errors-on-flat-files">How to Solve Errors with Flat Files</a>
  * <a href="#whats-wrong-with-my-flat-file">What's Wrong with My Flat File?</a>

## Examples
* <a href="#sample-scenarios">Sample Scenarios</a>
  * <a href="#scenario-1-stolen-check-used-to-withdraw-funds">Scenario 1: Stolen Check Used to Withdraw Funds</a>
* <a href="#flat-file-example-errors">Flat File Example Errors</a>
  * <a href="#example-1">Example 1</a>

<br>

___

## What is LIBRS?

LIBRS (Louisiana Incident Based Reporting System) is a reporting standard that allows Law Enforcement Agencies in Louisiana to submit their data to satisfy both Louisiana State Law, and Federal Reporting requirements. In the past, there were two methods that the Federal Government accepted data: UCR and NIBRS. To accommodate both the State and Federal Reporting requirements, LUCR and LIBRS were created. These reporting standards mirrored their FBI Counterparts, and subsequently checked the boxes for agencies complying with both the State and Federal reporting requirements all at once.

However, UCR has since been found to be not nearly as descriptive as NIBRS is able to be as it follows hierarchy rules and only counts arrests, while NIBRS is able to track offenses, offenders, properties, and victims. As such, the FBI has announced that in 2021, UCR will be retired, leaving NIBRS as the only suitable way to submit data to the FBI. 

In short, LIBRS is a reporting standard that is a superset of NIBRS (slightly more restrictive in some places) that allows for agencies to simultaneously meet their State and Federal reporting requirements. Since reporting to the Federal Government is crucial in securing funding for LEA's in the state, it's critical that Officers and Deputies are properly trained and equipped to use their Records Management Systems (RMS) to accurately track Incidents in their jurisdiction. 

### Benefits of Using LIBRS
* Error Checking and Validation via an API (https://validator.librs.org).
  * Note: We're currently working on a way to open that up to Vendors so they can implement error checking directly in their RMS. 
* No need for Agencies to learn NIBRS standards, or purchase and RMS that has to know how to report to both the State and FBI. 
* Appropriate and consistent records keeping in your Agency's RMS. 
* As of 2021 it will be the only way for Agencies to comply with their reporting requirements. 
* We're very nice people to talk to. 

### Can I Buy a LIBRS Certified RMS?
Short answer? No. 

LIBRS Certification has as much to do with the RMS as it does the Users of the RMS. Certainly your Agency will require an RMS that is capable to generating the Submission Files that LIBRS requires to process your data, but there are no "Certified RMSes" for LIBRS; anyone that tells you that is being untruthful. 

We do not maintain a list of Vendors or Softwares that can be purchased by an Agency that already has the capability of generating LIBRS Submission Files, nor do we verify any claims for vendors that they are "LIBRS Compliant". It is impossible for us to verify the claims of 100% compliance for all vendors, as it's unlikely that we will ever see 100% of all possible reporting cases from all vendors. Therefore, it is as much the responsibility of the RMS to generate the Submission Files properly as it is the Usse of the RMS to input the data for those files properly. 

## LIBRS Certification

### Certification Requirements
In order to have your data sent to the FBI through LIBRS, we require that Agencies meet a set of requirements in order to first become Certified. Certification tries to ensure that your Agency has been properly trained and thoroughly understands LIBRS/NIBRS Requirements, and how the Agency's data should be entered and stored in the RMS, and then submitted to LIBRS

1. The Agency must make the 96% or better testing threshold for three consecutive months of data submissions to enter certification. Some agencies accomplish this relatively quickly, others take quite a long time. Largely it depends on the quality of the software edits to control data entry and the level of training of the agency personnel. 
2. Once that threshold is met, then those Agency data submissions are reprocessed into the PROD (Non-Reporting Environment - This data doesn't go to the FBI, but the system enforces all the same rules on the data processing) mode to see that the files work sequentially logically. This is to check that incidents being resubmitted in multiple months, that delete and add arrest functions work correctly, that more arrestees aren't being added than the number of offenders that were originally reported in the incident, etc 
3. Assuming that percentages stay the same in the Non-Reporting Environment and no logical errors are discovered, the next step is an incident count comparison between LIBRS submitted data and agency submitted summary UCR data from the UCR Online website. If the number of incidents reported through both systems is very similar then certification will proceed further. If the LIBRS reported incident count is significantly lower or higher, then we will work with the agency and their vendor to determine what is being left out or what is being included that should not be, or to establish that the new process is simply more accurate than the previous UCR Reporting.
4. The next step is a comparison of distribution of offense codes in reporting. This is where business practices problems or training issues often emerge. We often find issues of misreporting here regarding Intimidation (13C) vs Assault/Battery (13A or 13B), Aggravated Assault (13A) vs Simple Assault (13B), Theft (23A-H) vs Motor Vehicle Theft (240), etc... This can be the most time consuming phase. This phase of the process often takes longer than achieving the 96% for three months initial threshold.

This is just a brief summary overview of the certification process. Once we start receiving data from you then we can get some idea of where your agency stands, and work with you to continue to correct errors. 


### Certification Process

To get Certified in LIBRS your agency will need to first contact the Louisiana Commission on Law Enforcement, and notify them of your intent to begin the LIBRS Certification Process. You can find the list of contacts at https://lcle.la.gov. Your agency will be contacted about setting up a training session with LCLE for how to use LIBRS, interpret Error Summaries, and gain a general overview of how everything works together. 

Next, FTP Credentials will be generated for you by the LIBRS Administrator. These are going to be required in order to actually start submitting data to the State. 

When starting out, your Agency will be in "Test", or Environment "T". In this environment nothing is actually saved to our database, but reports are generated as usual. There is no restriction on the Sequence of the files you submit (details below), so you can work at your leisure on whichever months are causing the most issues for you. 

When your agency reaches an Incident Acceptance Rate of 96% or more for at least three month submissions in a row, you will be moved to the Production, or "P" Environment. Despite its name, that's not the last stop. In this environment, everything behaves exactly the same as it would if your agency was Certified, except we don't extract your data and send it along to the FBI with our NIBRS Submissions. 

Your agency will remain in "P" while LCLE Staff review your previous submissions for accuracy and completeness. They will be in touch frequently to offer advice and guidance on how to resolve errors, and monitoring the accuracy of your agency's submissions until you achieve the requirements laid out under "Certification Requirements". At that point your agency will become LIBRS Certified, and be moved to the Certified, or "C" Environment. The data that you submit will be passed along to the FBI, and your agency will be monitored for continued accuracy in its future LIBRS Submissions. 


## How to Use LIBRS

### Getting Started 

The best way to get started with LIBRS is to start generating LIBRS Flat Files and testing them out at https://validator.librs.org. That is an free tool that mirrors the Production LIBRS Environment, and will check and return any and all errors that your file has in it. It's a great way to test both individual incidents, and large batches of incidents for errors. Users can simply drag and drop their Flat Files into the interface and it will return a LIBRS Error Summary. 

Using the Validator Tool does not constitute participation in the LIBRS Program. Running files through the validator site **does not** mean that you qualify as testing. The Validator Tool is meant as a means of getting immediate feedback on errors before submitting Flat Files to LIBRS. The Validator Tool does not save any data, other than a log of the IP Addresses that hit it. We do not consider this log when determining if an agency has been actively testing in LIBRS. The only way to participate in LIBRS is to submit files through the FTP Server (details below). 

The tool is open to everyone, and is also accessible as an API at https://api.librs.org. Here's endpoints that you can use and their definitions:

| Endpoint              | Method | Body                                                         | Returns                                                      |
| --------------------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| /api/validate/rtf     | POST   | JSON Formatted LIBRS Object<br /><br />{"LibrsFlatFileName": null, "LibrsFlatFileContents": %File Contents%} | JSON File that contains the Error Summary formatted as an RTF File. |
| /api/validate/txt     | POST   | JSON Formatted LIBRS Object<br /><br />{"LibrsFlatFileName": null, "LibrsFlatFileContents": %File Contents%} | Unformatted Plain Text Error Summary                         |
| /api/lrs/version      | GET    | Empty                                                        | Date and Time on which the last update to the validator's LRS and validation definitions were made. |
| /api/lrs/definitions  | GET    | Empty                                                        | XML File containing the LIBRS Table of LRS Codes. <br /><br />Note that the NIBRS Code listed here is the deprecated "Default NIBRS" Code. The full list of NIBRS Codes available for each Statute should be found using the LRS Master List |
| /api/lrs/requirements | GET    | Empty                                                        | XML File containing the validations that are present on the LIBRS validation table. These are what LIBRS uses as definitions for how it should validate certain offenses. |

Please note that we cannot guarantee the availability of the validation tool in the future; implement its usage into your program at your own risk. Additionally for the /api/validate endpoints, "LibrsFlatFileContents" should be formatted as a single line with /r/n line endings, and include all of the trailing spaces.


### Submitting a File
Once you're ready to start sending us Flat Files, follow these instructions:
1. Navigate to <a href="https://ftp.lsa.org">https://ftp.lsa.org</a>, and login with the Username and Password provided to you by the LIBRS Administrator
  * If you don't have a login, please contact Danny Jackson at <a href="mailto:danny@lsa.org">danny@lsa.org</a>
2. Using the onscreen Folder Navigation, select the "Data" Folder. 
3. Click "Browse", and located the LIBRS Flat File on your computer. Then click "Open". 
4. There should now be a file listed on the screen. Click "Upload This" to upload it to LIBRS for Processing. 

### Reports

Submitting through LIBRS means that for each submission period there will be a number of reports that get generated for your use automatically. These reports are found in the "Reports" Folder on the LIBRS FTP Server. To access them:

1. Navigate to <a href="https://ftp.lsa.org">https://ftp.lsa.org</a>, and login with the Username and Password provided to you by the LIBRS Administrator
2. Using the onscreen Folder Navigation, select the "Reports" Folder. 

1. Error Summary - This is a broad-strokes look at the accuracy of your submission. It shows you the errors and warnings present, and gives you an overall total of how well the submission did by outlining the Accepted and Rejected Incidents. 
2. Error Detail Report - This is a very narrow look at the errors that occurred in the submission. This shows you all of the inputs that went into the incidents that were rejected so that you can see the full context for what might have been throwing the error. 


#### Scorecard

The Scorecard is a table that gets updated every time you make a submission. It references the ***INCIDENT DATES*** on your submissions, and updates the score for each submission period every time you submit a new file. 
   * EG: In January your agency had 90 Accepted Incidents, and 10 Rejected Incidents, providing an Average of 90%. Next month, you go back and correct those errors, so now when those incidents get reprocessed, they'll be accepted this time. This will cause the Scorecard to update, and now show that you have 100 Accepted Incidents and 0 Rejected in January. Good work!
   
This report basically tracks how well an Agency has done with this submissions over the year, and calculates an overall score based on accepted and rejected I, D, M, and A Action Types. 

To find the Scorecard:

1. Navigate to <a href="https://ftp.lsa.org">https://ftp.lsa.org</a>, and login with the Username and Password provided to you by the LIBRS Administrator
2. Using the onscreen Folder Navigation, select the "Scorecard" Folder. 

### How Dates Work

Dates in LIBRS can get a little convoluted. In LIBRS there are four important Dates:

1. Incident Date - The date on which the Incident being submitted occurred. 
2. Incident Update Date - The most recent date on which the Incident that is being submitted was modified. 
3. Reporting Period - The reporting month and year that is being submitted. 
4. Reporting Date - The date on which the submission is being made. 

#### Reporting Periods and Out of Sequence

LIBRS requires that each Reporting Period is sent sequentially. You can't send us March if you haven't sent us February. Further, we require that a month has ended before you are able to submit that Reporting Period (EG: Can't submit January on Jan 25th, has to be Feb 1 or later).

We do this in order to keep track of Incidents that have been edited and modified. Effectively it allows us to keep everything straight with when an Incident first occurred, was first submitted, and the subsequent edits and modifications that have occurred since. If we allowed Agencies to skip months, then we would often find ourselves in a position where someone is trying to edit an incident that we have no record of, or entire months would be forgotten to be submitted. 

Because of that we have something called "Out of Sequence". If you submit a LIBRS Flat File to us and we have no record of the previous month being submitted, then LIBRS will throw an Out of Sequence Error. The file will be moved to that folder on the FTP, and the LIBRS Administrator for the Agency will be notified. 

The only way to resolve this error is to submit the missing month to us either before or alongside the submission you are trying to make. If you feel that you are getting Out of Sequence Errors by mistake, feel free to reach out to LIBRS Support. 



#### Incident Dates, Making Modifications, and on Which Submission They Appear

It can get a little confusing as to on what Submission Period an Incident will appear on. By default, the date that an Incident occurs will be the Reporting Period (Month) that it will get submitted with. If any edits or changes are made to that incident after it is submitted, it will need to be submitted again with the file for the Reporting Period (Month) that it was edited in. 

In the following flow chart, we are following a single incident that occurred in January. 

![LIBRS Incident Submission Timeline (1)](images/LIBRS%20Incident%20Submission%20Timeline%20(1).png)

On Feb 1, the January Submission is made, and LIBRS Processes the Incident. If there are no errors with the incident, then everything is accepted and it's all fine. If there are, then edits need to be made to the Incident. Since the edits being made to the Incident are done in February (Remember, January couldn't have been submitted unless it was a future month already), the Incident will need to be picked up again and submitted with the February Submission, which is being made (in this example) on March 1, where it is then accepted. 

Since the submission was made in both January and February, if you check the Error Reports they will say that one incident was submitted in both months. On January it will say it was rejected, and in February it will say it was accepted. This does not mean that two incidents have been submitted, only that the same incident was submitted twice, and on the second time overwrote the first record. However, since the Incident date is in January, the Scorecard will be updated to reflect that an Incident in January was fixed, and the score for that month will increase. 



### How to Submit Data

Data is currently submitted to the Louisiana Sheriff's Association (LSA) via ftp (https://ftp.lsa.org). If you're in need of assistance with the FTP Server, please contact the Louisiana Commission on Law Enforcement, and they will dispatch one of our techs.

#### FTP File Structure

Once logged in, you will be presented with a number of folders:

* Analytics - This is the folder that receives the QAR data that LIBRS is able to ingest. Currently only Lemis IBR Agencies are using this feature.
* Backups - No longer used
* **Data - This is the folder in which you upload the LIBRS Flat File**
* Failed - This is the folder where the Flat File will be moved to if there is an error in reading its contents (wrong encoding, incorrect line lengths, etc...)
* NIBRS - This is the folder where NIBRS data will be generated for each submission period. Since LIBRS is a passthrough to NIBRS, this data will be used to submit data to the FBI on behalf of the Agency. 
* OutOfSequence - This is the folder where the Flat File will be moved if it is found that the file bring processed is not the next Reporting Period that should be submitted according the the database. 
* Processed - This is where Flat Files are moved to once they've been successfully ingesting by LIBRS. 
* Reports - This is where automated reports will be generated and stored after a Flat File is processed. 
* Scorecard - This is where the Scorecard will get generated and stored. The scorecard is a running total of the accepted and rejected Incidents for and Agency.
* UCR Reports - Soon to be deprecated. LIBRS will automatically generate UCR submissions for Agencies based on their LIBRS data. This can be used by Agencies that are working towards Certification to submit their data to the State and FBI via UCR. 

LIBRS looks in the Data folder for new files to process. Every 5 minutes LIBRS kicks off a new check, and will process whatever is in the Data folders. Once LIBRS is done processing each file in there, it will move them to one of three folders:
1. If the file was successfully processed, and the records added to our database, it is then moved to the "Processed" folder. 
  * Note: This doesn't mean your file had no errors. Just that there were significant formatting or data errors that caused LIBRS to be unable to continue processing the file's data. 
2. If the file that is next in line to be processed according to the database (EG: June 2019 has been submitted, LIBRS is expecting to find July 2019 next) is not present, the files will be moved to the "Out of Sequence" folder. 
3. If there are major formatting or data issues with the file that caused LIBRS to be unable to process it without having a full-blown existential crisis, then the file will be moved to the "Failed" folder. 

It should also be noted that you can upload as many files as you like at once, so long as the expected Sequence is maintained. 
* For example, if the last month processed by LIBRS was January 2020, you can upload February through July all at once (though we would certainly hope you're submitting more frequently than that...). However, if you're missing your file for March LIBRS will process February and move it to the Processed folder, and the remaining files will be placed in Out of Sequence. 
* You're welcome to retrieve the files from Out of Sequence and reprocess them, but just know that until LIBRS sees that March file those other files are going to continue being Out of Sequence. 

#### How to Resubmit Data or Update Existing Incidents

In LIBRS, you don't "Resubmit" Data. Instead, you submit corrections and changes in a later Reporting Period. 

While we accept A and M (Arrest Addition and Modification) Action Types, by far the easiest way to handle making updates is to submit a Delete, and then just send us back the whole Incident again. Deletes are just a single line, and they're exactly the same as Segment 10 (Administrative Segment) except for the fact that you have a "D" instead of an "I" in the Action type. While we *can* do A's and M's, for the sake of consistency in submitting we highly recommend the aforementioned method. 

Doing it this way also takes care of any confusion Developers might have about what to *add* to an existing Incident Report. Rather than holding onto the Existing Flat File data and modifying it whenever the Incident changes, you can just regenerate the entire Incident as though it has never been submitted before, and slap a Delete (Administrative Segment 10 with Action Type 'D - Delete') to the front of it. 

##### Making Updates to Incidents

When users make changes to an Incident, the RMS should be able to determine if there was a "LIBRS-Reportable Change" that was made (IE: A Change to a LIBRS Data Element that would cause the Incident to have different data if the Flat File was generated again). This date would tell you how you need to submit the data to us:

1. Perform an initial submission of the Incident. 
2. Don't need to do anything because the Incident was already submitted and there have been no changes made to it. 
3. Need to generate a Delete and resubmit the Incident because changes were made to it after it as initially submitted. 

###### If the Incident Hasn't Been Reported Yet

If the Incident hasn't yet been reported to us, we would recommend that whatever is reported is done so with the latest "state" of an Incident. For example, Agency A has not yet submitted their April, May, and June of 2020 LIBRS Files. However their staff have made updates in June to an Incident that occurred in April. Since April has not yet been submitted yet, this data can be reported two ways

1. (Not Recommended) When April is ready for submission, the RMS can generate the Original Incident as it was entered and submit it. Then later when the June Submission is made, whatever changes were made to it since April can be generated and submitted, ultimately reporting the final "state" of the Incident.
2. (Recommended) Changes that were made in June to the data from April overwrite it, and the Incident doesn't appear in the April Submission whenever it is made. Rather, it is simply submitted in June as a new Incident to LIBRS. 

###### If the Incident Has Been Reported Already

If the Incident has already been reported to us, then really the only option is to submit a Delete Segment for it and resubmit the entire Incident to us again. While you *can* use Action Types A and M, they're not available for all of the kinds of changes that might be made to an Incident, and there was a whole schpiel at the top of this section about why it's better to send a Delete and resubmit the whole Incident as an Insertion.

As a reminder, to submit a Month in LIBRS, that month needs to be over. So the easiest way to keep track of what needs to be resubmitted and when would be to keep track of when it was last updated. It doesn't matter if you send us the same incident on each Month, so long as you're sending the Delete Segment to accompany them we'll process it all the same. 

____

<br>

## Questions from Vendors

### Which Incidents to Send

Generally we want any Incident that is able to report the minimum amount of data required by the NIBRS Code. This includes Group B / 90-Series Offenses (90A, 90Z, etc...), however if the Group B / 90-Series Offenses doesn't have an arrest associated with it we will not pass it along to NIBRS. 

In general, an Incident needs to have the following information to be reported:

* One or More Offenses (Segment 20's)
* One or More Offenders (Semgent 40's)
* One or More Victims (Segment 50's)
* (For Crime Against Property Only) One or More Properties (Segments 30, 31, and 33's)

Again, please note that we want your Group B / 90-Series Offenses, even if there is no arrest associated with them. We won't send it to the FBI until an arrest comes through, but it's valuable information for the State. 



___


### Should I Send Duplicate NIBRS Codes?

This question pertains to incidents where, say, there are multiple types of drugs that are found, which all have different Schedules. In Louisiana, three drugs of three different schedules are considered three different LRS Codes, and therefore three different Offenses. NIBRS, however, doesn't have this distinction. They only care if a Drug Offense involved actual drugs, paraphenalia, or both. As such, they don't want to have multiple 35A (Drug Possession) Offenses listed on the same NIBRS Report for the same Offender. 

LIBRS, however, doesn't care. Since LIBRS is based on Louisiana Statutes, we would like to know that there were three different Drug Schedule Offenses that occurred in the Incident. This holds true for all Offenses, so long as the Mutual Exclusivity rules are not broken (There are a number of Offense Codes that cannot be applied to the same Victim in the Same Incident. You can see that list here: <a href="../librs-spec#offenses-that-cannot-occur-to-the-same-victim">Offenses That Cannot Occur to the Same Victim</a>. These Offenses, however, are all Crimes Against Persons or Property, so for Crimes Against Society (like Drug Offenses) it's safe to say you should report them all). 

Once LIBRS accepts your Incident, it will automatically perform the consolidation and aggregation required to put it into the format that the FBI wants for NIBRS. From your point of view, you should just tell us what happened; if that means multiple Offenses of the same NIBRS Code (again - not violating Mututal Exclusivity), then tell us that. From there, LIBRS will get it to the FBI in the format they want it in. 


___


### Segment Questions

<br>

#### Offenses (Segment 20)

* For Segment 20 (Offense), there is a Victim Sequence Number. Does that mean there can be multiple Segment 20's per incident and that each victim (Segment 50) needs to have a Segment 20 associated with them?
  * Yes, because each Offender (Segment 40) can be implicated in multiple Offenses and can be related to multiple Victims, each Offense (Segment 20) must be tied to one (1) Victim Sequence Number. This means if you have three (3) Victims of the same offense in your RMS, you will require three Offense Segments. (Segment 20)
* I have an Attempted Murder, but I get an error when I try to submit it as an 09A or 09B. How do I report that?
  * Most any LRS Code can be reported as either Attempted or Completed; Attempted being that the crime was attempted, but either not successful or not completed, and completed being that the crime occurred according to the Statute. 
    * For instance, an Attempted Robbery would be one that before the Offender could actually get away with the Victim's belongings, a passerby stopped them and they ran away. In the end the Victim is still the victim of a crime, however being that they are uninjured and still have their belongings it should be reported as an Attempted Robbery. 
  * Murder is different. According to NIBRS, Attempted Murder (Attempted 09A or 09B) should be reported as a Completed Aggravated Assault (Completed 13A). The FBI does not have a method in which they are able to accept Attempted 09-Series Offenses. In order to minimize the amount of data interpretation we're doing before passing the data to NIBRS, we also follow this rule. 
  * So in short, you should report an Attempted 09A or 09B Offense as a Completed 13A, and enter in the data as such. 


____

#### Properties (Segments 30, 31, 32, and 33)

* Since there is not a limit to how many Segment 31's that can be entered, can there be duplicate property description types allowed for same incident? Example, if in the same incident three (3) TV's were damaged, Would there be 3 Segment 31's with same Property Description Type and Property Loss Type?
  * Yes, since they are three distinct properties you will need to include three distinct Segment 31's (Property Description). You can handle that in your RMS however you want, so long as LIBRS gets sent the three segments (EG: If your RMS wants to store the property once and list it three times in the Incident, so long as we get those three segments to say that there are three TV's then it doesn't matter to us if you use the same property in the RMS or make three different ones.)
  * It should be noted that NIBRS wants properties to be aggregated together, however LIBRS wants them to be split out individually. Upon NIBRS Extraction, LIBRS will combine and aggregate all properties with matching Property Descriptions and their values for submission to the FBI. However, the State will use the more granular data for analysis purposes, so it shouldn't be aggregated when you send it to us.
* What's up with Segment 33? Is it optional, or should I include it?
  * Segment 33 should be number two on your list after brushing your teeth twice a day. 
  * We made it Optional to support older RMS systems while they began implementing it, but it should be considered as required. At some time in the future it will likely become mandatory, so if you are in the earlier stages of your RMS development it'd be best to include it now.
* NIBRS requires that we submit multiple Suspected Drug Types in the same Segment, but LIBRS only allows one. Can I only report a single Drug in LIBRS?
  * No, while you can only have one per Segment in LIBRS, we allow you to have an many Segment 31's as you like! S
  * So, for instance, you can report 1 lb of Marijuana as well as 10 Marijuana Plants as two different Segment 31's, or if two people are found in possession of the same drug type on their person, you can report both of those containers as separate properties with the same Suspected Drug Type, Quantity, and Measurement Type.
  * In short, give us what you got. We will aggregate as required when sending it to NIBRS. 

____

#### Offenders (Segments 40 and 41)

* Can there be up to four (4) Segment 41's for each Segment 40?
  * Correct, you can include as many Segment 41's (up to four) as are relevant with each offense. 
    * One thing to note is that 'G - Gaming Activity Motivate for Crime' is not a NIBRS Reportable code. 
      * If more than one Motivation Type is supplied and one of them is 'G', then it will simply be left off the NIBRS Submission Data. 
      * If 'G' is the only Motivation Type supplied, then it will be converted to 'N - Not Applicable' when the data is sent to the FBI. 
* NIBRS Reports allow for up to five (5) Bias/Motivation Types. Are we supposed to submit multiple Segment 40's to submit multiple Bias/Motivation Types?
  * Unfortunately LIBRS only allows one Segment 40 (Offender) to be submitted for each Offender Sequence Number, and therefore we can only allow the submission of a Single DE 84 - Bias/Motivation type for each Offender. 
* Is it possible to list all Drugs in an Incident as a single Property?
  * No, only one Suspected Drug Type is allowed for each Property Description Segment (Segment 31), and Property Sequence Numbers (DE P1) are never allowed to repeat unless it’s a Stolen/Recovered Loss Type. So each Seized Drug needs to have its own Segment 31 with a unique Property Sequence Number.


____

#### Victims (Segments 50, 51, and 52)

* If there are multiple injuries, does that mean there will be multiple Segment 51's for each Segment 50?
  * Yes, you can include up to five (5) Segment 51's (Victim Injury) as needed. However, the selected Injury types will need to be valid for the NIBRS Offense Code. 
    * For example, the two of the valid Injury Types for NIBRS 13A are 'O - Other Major Injury', and 'U - Unconsciousness', while 'M - Apparent Minor Injury' is not. 
      * If you were to send us two Segment 51's for the same Victim Sequence number where the Injury Types are 'O' and 'U', we **would not reject the incident**. 
      * However, if one of those Segment 51's were to have an Injury Type of 'M', instead, then we would reject it because that's not a valid Injury Type for the NIBRS 13A, even though the other Injury Type is valid.  
* What do I do if there is a Victim of a 13A and 13B? When I put 'N' or 'M' for None or Minor Injury, I get an error that 13A can't use that, and when I use a Major Injury with the Victim, I get an error saying that I can't use that with 13B. 
  * Unfortunately 13A and 13B (and 13C for that matter) are all mutually exclusive Offenses, and there cannot be a Victim that is associated with Both in the same Incident. 
  * Since Victim Injury is tied to the Victim via the Victim Sequence Number, and since the Offenses are also tied to the Victim via the Victim Sequence Number, there's no way to delineate which Injury Type goes with which Offense. 
  * In cases like this, you should make a separate Incident for the 13A and 13B Offenses. 

* If there are multiple Victim/Offender Relationships, will there be multiple Segment 52's for each Segment 50?
  * Yes, You'll need to add a Segment 52 for each Victim/Offender Relationship. 
    * For example, if there are two Victims, and three Offenders, you would have the following Segment 52's:

      ```
      52ILAXXXXXXX20-000000-01001001%%                    ZZ
      52ILAXXXXXXX20-000000-01001002%%                    ZZ
      52ILAXXXXXXX20-000000-01001003%%                    ZZ
      52ILAXXXXXXX20-000000-01002001%%                    ZZ
      52ILAXXXXXXX20-000000-01002002%%                    ZZ
      52ILAXXXXXXX20-000000-01002003%%                    ZZ
      ```

      Where LAXXXXXXXX is the Agency's ORI Number, and %% is the Victim/Offender Relationship Type. The first three Segments relate Victim 001 to each of the Offenders, and the last three Segments related Victim 002 to each of the Offenders. 

* Is there a limit to the number of Victims that can be associated with an Offender?
  * No, but to help prevent us from making an incorrect assumption we would encourage you to follow the NIBRS Requirements on that one. They limit it to 10, so to prevent us from interpreting that incorrectly it might be best for you to send us exactly what you would want to be passed to the FBI should you exceed that number. 
  
____


## What is "Victim Was Offender" and When do I Use It?
The Relationship of "VO - Victim Was Offender" can be very confusing at first, but it's actually very simple. This relationship is used in Segment 52 to describe that the Victim and the Offender are the same person. This relationship *is not* intended to denote that the Victim was a Victim of an Offense they themselves committed - Although it could in cases where the a person commits an Offense that they are the Victim of (Like committing arson on their own property for Insurance Money). In reality, it more or less is an equals sign. 

Let's take the example of a Bar Fight. Two guys who don't know each other break out into a fight after drinking. Both men have committed a 13A - Aggravated Assault, and as such, we need to denote that the Victims and the Offenders we have in the Incident are the same people. Therefore we will require four (4) Segment 52's:

        * 20 - First 13A Offense  - Relates to Victim 1
        * 20 - Second 13A Offense - Relates to Victim 2
        * 40 - Offender 1's Details
        * 40 - Offender 2's Details
        * 50 - Victim 1's Details
        * 50 - Victim 2's Details
        * 52 - 001001VO
        * 52 - 002002VO
        * 52 - 001002ST
        * 52 - 002001ST

Using the four Segment 52's allows us to fully define everyone's involvement in this Incident. The first two are the VO's, and they point Victim 1 to Offender 1, and Victim 2 to Offender 2. With the relationship of VO, that tells us that these are actually the same people. The second two are ST's, and they point Victim 1 to Offender 2 and vise versa. This tells us that they didn't know each other. 

Now, normally, all Offenses that apply to a Victim apply to all Offenders that relate to that Victim. However VO is different, and will not apply our first Segment 20 to our Victime/Offender Number 1. Same goes for the second. 

So with those four segments we're able to infer that we've got two people that beat the snot out of each other. Our first Victim IS ALSO our first Offender, and the second the second. This is how Victim Was Offender should be used - to link a Victim Sequence Number to an Offender Sequence Number in order to denote that they are the same person, not that the Victim committed an Offense that they were the Victim of. 


## What is an Unknown Offender?
In LIBRS there are two definitions to an Unknown:
1. The information is impossible to classify
2. The information is literally not known

The first definition is used in cases where an Officer is unable to definitively classify the attributes of a known quantity of Offenders. Contrary to that, the second definition is used when an Officer does not have enough information to even say how many Offenders were involved.  

Take a case of a Burglary caught on security camera. Upon reviewing the footage, we can see that there are three people that have burgled the store. However, the Suspects are all wearing dark, baggy clothes with masks, and the camera quality is too poor to determine any sort of features about them. In this case, you would have three Offenders that have all of their Attributes (Race, Sex, etc...) listed as Unknown. 

In the same case, if the Security Camera wasn't working, then you wouldn't even know how many Suspects were involved in the burglary. Therefore in that case, you would have one Unknown Offender. 

So effectively if you know *anything* about an Offender, even the quantity Offenders involved, it should be listed as an Offender that has all Attributes listed as Unknown. Conversely, if you don't know anything at all about who committed the crime, then it should be listed as a single Unknown Offender with a Sequence Number of '000'.



## When is a Person Working at a Business a Victim, and When is the Business a Victim?
This one is simpler than it sounds. If the victim of the Offense is a specific person, then it's the employee that is the victim. Otherwise it's the business. 

Example 1: An employee's cell phone is stolen. In that case, the employee is the Victim because their personal belongings were taken from them. 
Example 2: An employee's company issued cell phone is stolen. In that case, the business is the Victim because the business is the actual owner of the stolen item. 


## Why Does Kidnapping Involve a Property?
Kidnapping is a Crime Against Person that also requires a Property because the Property represents a ransom that may be involved in the Incident. This is true even for cases where a ransom is not involved, such as parental abduction situations where a parent takes, keeps, or otherwise holds a child while defying the rights of the child's custodial parent or legal guardian. In these cases, the property loss type would likely be 1 - None, since the abductor is not attempting to solicit money from the child's guardian.

So any time there is a Kidnapping Offense, there also needs to be a Property associated with it that represents a ransom amount, even though one may not actually exist.

## How Do Case Statuses Change when Arests are Made?
We don't explicitly collect anything along the lines of case status as such, so these statuses of “Pending Investigation” or “Cleared by Arrest” would never be submitted to us. All incidents are considered open / uncleared unless you submit an arrest or an exceptional clearance for it. From the FBI / NIBRS perspective cases are cleared by any (single) arrest regardless of number of offenders, so if you send us an incident where you have 5 offenders and 1 arrestee then the FBI will count that is cleared for your open / cleared totals. That doesn't mean that it is 'closed' and cannot be updated. On the contrary, we would expect you to submit the additional arrestees in the future when / if you catch them.  

LIBRS DOES NOT want the minimal NIBRS requirement. We want all individuals arrested to be reported so LCLE can see how many of the original offenders were arrested and so that we can conduct arrest trend analysis here at the state level. Submitting only one arrestee per incident potentially dramatically under-reports you actual custodial arrest totals.  


## What Data is Pulled from our Supplemental Reports?

Not a thing - we don't see anything in supplemental nor narratives. If they don't put the information in the respective property/victim/offender/etc screens then we never see it. Some Agencies have run into issues in the past by entering in the initial information from an Incident, and then locking it for changes after it's been approved by a Supervisor. This forces Officers to add later information to the Supplemental Reports, which is something we will never see. So additional Arrests, Properties, Offenses, and Victims that are added at a later date never make their way to being reported.

So... Don't do that. If it's not in a Segment, we don't see it. 

___


## Offense-Specific Questions and Answers

### Allowable Assault Injury Types and Weapons
We get a lot of questions about which Injury Types can be used with which Assault (13A, 13B, 13C). Here's a breakdown of the law:

#### 13A - Aggravated Assault
According to the FBI, Aggravated Assault requires:
* An attack on a person in which:
   * The Offender uses a Dangerous Weapon ***or***
   * The Offender displays/brandishes said dangerous weapon ***or***
   * The Victim suffers serious/severe bodily injuries ***or***
   * There was risk for serious/severe bodily injuries to the Victim.

Based on that verbage (all of the ***or's***), any case that involves a weapon, any case where a Victim is seriously injured, or any case where the Victim ***could have been*** seriously injured is considered an Aggravated Assault. As such, a Weapon isn't entirely required to be used, nor is an Injury required, however it's not possible for both a weapon and injury to not be present.

Someone pointing a gun at another person would be considered Aggravated Assault, even if the gun isn't fired and the Victim Isn't injured. Alternatively, a Victim being beaten within an inch of their life by an Offender's fists would also be considered an Aggravated Assault. 

Nine times out of ten, an Aggravated Assault is going to include both a Weapon and a Victim being injured. However just because it only involves one doesn't mean it's not an Aggravated Assault.


#### 13B - Simple Assault
According to the FBI, Simple Assault requires:
* An attack on a person in which:
   * The Offender does not use or display a dangerous weapons ***nor***
   * The Victim suffers serious/severe bodily injury. 

This means that a Simple Assault cannot include a Weapon (other than hands, feet, etc...), and the Victim can only have suffered minor or no injuries. So if an Assault involved a weapon, or the person was harmed beyond minor injuries, then it's bumped to an Aggravated Assault. 

If, however, the person only used personal weapons (themself) and the Victim was not injured, or only minorly injured, then you've got yourself a Simple Assault.


#### 13C - Intimidation
According to the FBI, Intimidation requires
* No Dangerous Weapons
* No physical attack of the Victim

This means Intimidation is all talk, no followthrough. If a Victim is touched/harmed in any way, or the assailant has any weapons on display then it cannot be Intimidation.

___

## Flat Files and Troubleshooting

### General Flat File Formatting Requirements

Currently, LIBRS accepts data submissions in the form of a character delimited flat file. At this time we do not accept XML or JSON Format submissions. 

Flat Files need to be sure to meet the following General Requirements:

1. A single Segment 00 (Header) and 99 (Footer) need to be included at the start and end of the file; you do not need to wrap each incident with one. 
2. There should be no blank lines present in the document, except for one blank line after the Footer Segment (Segment 99) (allowed, not required). Otherwise each line should have content on it. This includes the first line of the file being the Header Segment (Segment 00). 
3. All lines must have an exact length of 150 characters, as specified in the Technical Specifications. The exception is the Footer Segment (Segment 99) should only be 10 characters long. 
4. We don't have a restriction on file extensions, however we do have a restriction on file formats. We don't accept PDF, XML, JSON, HTML, RTF, etc... Each file you send us must be UTF-8 Encoded. The file extension doesn't matter, though. For instance if you'd like you could name the files *.librs if you like. Just so long as it's a UTF-8 Encoded file. 
5. We allow CR, LF, and CRLF Line Endings. 
6. The only thing that should get uploaded to the FTP Server are the Flat Files. They go into the Data Folder where they will be picked up for processing, and disseminated into one of three folders:
   * Failed: This means that there was something drastically wrong with the formatting of the file, and LIBRS wasn't able to read the contents properly. 
   * Out of Sequence: This means that the Reporting Period that the file represents isn't the next one in line to be submitted. We require a linear submission of Reporting Periods to ensure that Updates and Edits to existing incidents are able to be made successfully. 
   * Processed: Everything went as expected, and the data was read properly and processed. 
7. At this time we are unable to accept NIBRS text files. We are able to accept NIBRS Files in the IEPD Format, however. 

### How to Solve Errors on Flat Files

Sometimes the errors LIBRS gives can be difficult to interpret. We're actively working on improving this so that Errors are easier to understand and correct. In general, though, here's how to fix Errors on your Error Summary:

1. Read the Error Message, and take a look at the Error Contents. Sometimes it's pretty clear off the bat what the problem is. 
   * EG: If the Error is 13019 - DATA CAN ONLY BE ENTERED FOR CERTAIN OFFENSES, then that means the Data Element that's supplied in the Error Content shouldn't have been included based on the Offense Type that's been submitted for that offense. Either change the Offense Type to something else that does allow it, or remove that information from the Flat File. 
2. Go to the LIBRS Technical Specifications and Data Element Definitions, and use Ctrl + F (or Cmd + F) to find your Error Number. For the most part, the documentation contains some further descriptions about the cases that may have caused the error to get triggered. 
   * EG: Often times distinct NIBRS Codes will be listed with specific instructions on how to avoid the error your getting for those codes. 
3. Run your Flat File through https://validator.librs.org, if you haven't already, and check if the result is different. If you're trying to resolve errors to a file the LIBRS generated and uploaded to the FTP Server, it's possible that you're looking at errors that were being tripping unintentionally and have since been resolved. Running your file through Validator will give you an instant Error Summary for the file based on the latest LIBRS version available. 
4. If you're still stuck, ask for help! Contact the Louisiana Commission on Law Enforcement (https://lcle.la.gov) for assistance in understanding the errors your getting and how to correct them. 

### What's Wrong with my Flat File?

This section includes Flat Files that Vendors who are testing have sent to us for critique as to why the files aren't processing properly. 

Here's a couple of tips on things to check before you reach out for help:

1. Does the Flat File have a Header and Footer Segment?
   * These are required Segments no matter if you're submitting 0 Incidents or 1000. 
2. Are there blank lines between, before, or after each of your segments?
   * There shouldn't be. Take a look at the examples below. 
3. Does the Flat File have padding to make each line 150 characters long?
   * Open it up in a Text Editor (Sublime Text, for instance) and verify that all the lines are the same length and the last selectable character is character number 151. Since the line starts on character 1 rather than character 0, being on character 151 means that you have 150 characters to the left of your cursor. 
4. Are all dates in the format of MMDDYYYY or MMYYYY?
   * LIBRS has to interpret Dates in this assumed format. Be sure you're not doing YYYYMMDD or DDMMYYYY. 
5. Does the Footer Segment have leading or trailing spaces rather than zeros?
   * EG: "99    19ZZ" and "9919    ZZ" are both improperly formatted. The Footer Segment should be in the form "99000019ZZ", where 19 is the number of lines in the file. Replace as many leading zeros as required to ensure the whole line, including the 99 and ZZ is 10 characters long.
6. If you're having problems with Properties, are you including Segment 33?
   * We try our best to infer what property goes with which offenses, but sometimes we have to make assumptions that turn out to be incorrect. This can be 100% avoided by sending us a Segment 33 for each Property/Offense Relationship in the incident. 



Note: To save space on the page we've removed the padding after the Segment Trailer "ZZ", and in order to not call anyone out we've removed the Header, too. In both of these cases, not having those present will throw an error, so we won't put any examples of files that have those issues. 


### Sample Scenarios

#### Scenario 1: Stolen Check Used to Withdraw Funds

In this scenario, a Suspect has stolen a checkbook and written checks to themself with it, using those checks to withdraw money from the account by visiting a bank. The bank gives the Suscpect the cash, and later in the day receives a call from the owner of the checkbook that their checkbook has been stolen, and to void any checks that have been cashed since it was reported. The bank finds that it did, indeed, cash a check that the owner claims to be fraudulent. The bank calls local Law Enforcement, who collects the cashed check as evidence. Law Enforcement Officers are later able to apprehend the Suspect, and in their possession is the stolen checkbook. The cash, however, was not recovered. 

In this case, the following would apply:
* 23H - All Other Larceny
  * This Offense is needed to report the initial theft of the Checkbook. 
    * Since the checkbook was actually stolen, there should be a Property associated with this Offense that has a Property Description of 21 - Non-Negotiable Instruments with a Property Loss Type of 7 - Stolen. Since later on the checkbook was recovered, there should be another Property Loss Type of 5 - Recovered associated with this Property. 
    * The Property Value, however, would be Zero; the value of a check that isn't filled out is the same as the value of the paper it's printed on, which is nothing.
  * The Victim in this case would be the Individual that the checkbook was stolen from. 

* 250 - Counterfeiting/Forgery
  * Since the actual owner of the checkbook did not authorize the check, it is considered a Forgery. 
    * Now that the check has information written on it, it has a Property Description of 20 - Negotiable Instruments. Previously it did not have a value, either, but now it has a value of the cash-equivalent written on the check. 
    * Additionally the Property Loss Type for this Property would be 3 - Counterfeited/Forged. Since the check was used to complete a crime, the Property is not to be reported as 6 - Seized; if the suspect had been caught with the forged check, then it would have a Loss Type of 6 - Seized. 
  * For this Offense, the Victim would be the Individual that the checkbook was stolen from, as the Suspect is forging their identity in this Offense.

* 26A - False Pretense/Swindle/Confidence Game
  * 26A would describe the act of committing fraud when the suspect withdrew funds at the bank. 
    * Here the Property associated with the Offense would be the actual cash that was withdrawn from the bank, so 20 - Money, and it would of course have a value equivalent to its own. 
    * In this Offenses the Property Loss Type should be reported as 7 - Stolen, because 5 - Recovered and 7 - Stolen are the only Valid Property Loss Types for 26A Offenses. 
  * Our Victim in this case would once again be the Individual. The bank only serves as an intermediary between the outside world and the victim's money, so it didn't actually lose any cash itself. If this check had been used to purchase tangible goods, however, then the Victim would be the Business that accepted the check. 



### Flat File Example Errors

#### Example 1: 

This file was kicking back the following errors:

* 13042 - Property Description had a Value that Exceeded Threshold of [$ Value].
* 10081 - This Property Code cannot exist with this offense.
* 90018 - Property must have a valid relationship to at least one offense.

      10ILA05200T12019005456                    06012019 20N                            ZZ
      20ILA05200T12019005456  00114:67       C00107               23H                 ZZ
      20ILA05200T12019005456  00214:67       C00207               23H                 ZZ
      20ILA05200T12019005456  00314:67       C00307               23H                 ZZ
      30ILA05200T12019005456                          ZZ
      31ILA05200T12019005456  777100                               001                 ZZ
      31ILA05200T12019005456  777100                               002                 ZZ
      31ILA05200T12019005456  777100                               003                 ZZ
      33ILA05200T12019005456  001001                    ZZ
      33ILA05200T12019005456  001002                    ZZ
      33ILA05200T12019005456  001003                    ZZ
      50ILA05200T12019005456  001B                                        ZZ
      50ILA05200T12019005456  002I26 01161993FWNU                         ZZ
      50ILA05200T12019005456  003I45 06121974FWNU                         ZZ
      40ILA05200T12019005456  000             88                    ZZ
      41ILA05200T12019005456  000N                    ZZ
      9919    ZZ

The first thing to notice is that the Footer Segment is not correct. The footer should always be 10 characters long with leading zeros before the number of lines in the file. Currently the Footer Segment looks like this:

	    9919    ZZ 

However, it should look like this:


	    99000019ZZ




Next, we're getting a 90018 that states that we should have at least one offense linked to this property. Looking at the file, we do have three Segment 20's, 31's and 33's, so it's to be inferred that each Property is to belong to one offense. The first thing to look at is the Segment 33's, since that's the Segment that will link the properties to the offenses:

	    33ILA05200T12019005456  001001                    ZZ
	    33ILA05200T12019005456  001002                    ZZ
	    33ILA05200T12019005456  001003                    ZZ	

Right off the bat, we can see the problem. Each of the DE P1R's (Property Sequence Number Reference) is listed as 001, while the DE L6R's (Offense Sequence Number Reference) point to each of the three offenses. This means that Property Sequence Number 1 has inadvertently been applied to all of the Offenses, while the other two properties (002 and 003) have been orphaned. We can fix that by changing the Segment 33's to the following (the *'s are just there to get your attention to what changed, they aren't actually included in the file):

	    33ILA05200T12019005456  **001001**                    ZZ
	    33ILA05200T12019005456  **002002**                    ZZ
	    33ILA05200T12019005456  **003003**                    ZZ

Running the File again, we've removed the 10081 and 90018 Errors. The 10081 Error went away because we fixed the 90018, and now we're applying a single stolen property to each offense. 



Next we need to resolve the 13042 Error. This error has to do with the value of the Properties. So, we need to take a look at the Segment 31's:

	    31ILA05200T12019005456  777100                               001                 ZZ
	    31ILA05200T12019005456  777100                               002                 ZZ
	    31ILA05200T12019005456  777100                               003                 ZZ

Again, this one is pretty clear as to what the problem is. after the "777" is where the value of the property begins. The value field is 9 characters long, and lead with zeros. Here it looks like it was intended to submit a property value of 100. However, since there are no leading zeros, LIBRS is interpreting the trailing spaces to be zeros, meaning that it's actually seeing a value of 100,000,000. LIBRS doesn't accept values of over 1 million. We added two extra digits to that in the event that someone is trying to enter cents onto the value of the property (cents should be rounded off)

So, correcting that gets us the following (Again, the *'s are there to show the difference and shouldn't be included in the Flat File):

	    31ILA05200T12019005456  777**000000100**                         001                 ZZ
	    31ILA05200T12019005456  777**000000100**                         002                 ZZ
	    31ILA05200T12019005456  777**000000100**                         003                 ZZ



Putting it back together, we now have the following file that validates without Error:

	    10ILA05200T12019005456                    06012019 20N                            ZZ
	    20ILA05200T12019005456  00114:67       C00107               23H                 ZZ
	    20ILA05200T12019005456  00214:67       C00207               23H                 ZZ
	    20ILA05200T12019005456  00314:67       C00307               23H                 ZZ
	    30ILA05200T12019005456                          ZZ
	    31ILA05200T12019005456  777000000100                         001                 ZZ
	    31ILA05200T12019005456  777000000100                         002                 ZZ
	    31ILA05200T12019005456  777000000100                         003                 ZZ
	    33ILA05200T12019005456  001001                    ZZ
	    33ILA05200T12019005456  003003                    ZZ
	    50ILA05200T12019005456  001B                                        ZZ
	    50ILA05200T12019005456  002I26 01161993FWNU                         ZZ
	    50ILA05200T12019005456  003I45 06121974FWNU                         ZZ
	    40ILA05200T12019005456  000             88                    ZZ
	    41ILA05200T12019005456  000N                    ZZ
	    99000019ZZ


