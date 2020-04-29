---
id: introduction
title:  Online psychological experiments and surveys
sidebar_label: Online Experiments
---

This documentation site refers to the [ILCB server](https://ilc-online-test.net), how it was built and is run, and refers also to several other external resources that one can use for experimenting online.

## ILCB

The [Institute for Language, Communication and the Brain](https://www.ilcb.fr) is a French joint research institute bringing together experts in linguistics, neuroscience, psychology, medicine and computer science to understand and to model the way that language functions. The main objective of this 10-year scientific adventure is to create a generic model of the processing of language and its cerebral bases. The institutional support comes from [CNRS](http://www.cnrs.fr), [INSERM](https://www.inserm.fr), [Aix-Marseille Université](https://www.univ-amu.fr) and [Université d'Avignon](http://univ-avignon.fr).


---

## Table of Resources

:::tip
Refer to the [How-to page](ilcbhowto.md) to know more about the preferred paths: **Labvanced** and **JATOS**
:::

Online experiments can be written in javascript from scratch, but there are many tools, libraries or all-in-one solutions to help building, managing and promoting an online experiment.

_The list below reflects the knowledge of the researchers and IT support staff involved in the ILCB server initiative._


##### Table 1. Available tools at a glance


| Tool          |     Build     | Manage | Promote |
| ------------- | :-----------: | :----: | :-----: |
| [Cubius](/docs/introduction#cubius)                      | x |   |   |
| [JsPsych](/docs/introduction#jspsych)                    | x |   |   |
| [Lab.js](/docs/introduction#labjs)                       | x |   |   |
| [OpenSesame Web](/docs/introduction#osweb)                        | x |   |   |
| [PsychopyJs](introduction#psychopyjs)                    | x |   |   |
| [JATOS](/docs/introduction#jatos)                        |   | x |   |
| [Pavlovia](/docs/introduction#pavlovia)                  |   | x |   |
| [The experiment factory](/docs/introduction#the-experiment-factory)         | x | | |
| [Netlify](/docs/introduction#netlify)                    |   | x |   |
| [Openlab](/docs/introduction#openlab)                    |   | x |   |
| [SoSci](/docs/introduction#sosci)                        | x | x | x |
| [Sona systems](/docs/introduction#sona-systems)          | x | x | x |
| [Prolific](/docs/introduction#prolific)                  |   |   | x |
| [Mechanical Turk](/docs/introduction#mechanical-turk)    |   |   | x |
| [Labvanced](/docs/introduction#labvanced)                | x | x |   |
| [Limesurvey](/docs/introduction#limesurvey)              | x | x |   |
| [Qualtrics](/docs/introduction#qualtrics)                | x | x |   |


---

## Build, manage and promote an online experiment

### Cubius

[Cubius](https://github.com/lina128/cubius) is an Harvard University based solution for dynamically building static web sites to be hosted on Amazon servers.

[To top](/docs/introduction#resources)


---

### JsPsych

[JsPsych](https://www.jspsych.org)
is a JavaScript library for running behavioral experiments in a web browser. The library provides a flexible framework for building a wide range of laboratory-like experiments that can be run online.

:::tip

JsPsych is great for advanced users.

:::

[To top](/docs/introduction#resources)


---

### Lab.js

[Lab.js](https://lab.js.org) is a free, open, online study builder for the behavioral and cognitive sciences.

:::tip

Export your experiment as a Jatos zip file, and import it in JATOS.
There are plenty of videos on the web to help you start with.

:::

[To top](/docs/introduction#resources)


---

### OpenSesame - Web extension (OSWeb)

[OSWeb](https://github.com/shyras/osweb/) is an online runtime for OpenSesame experiments.


:::tip

Export your experiment as a Jatos zip file, and import it in JATOS.
There are plenty of tutorials on the web, and the forum is quite active

:::

The following OSWeb page covers all you need to know about this free software : https://osdoc.cogsci.nl/3.2/manual/osweb/

Basically, everything in OpenSesame that is not python scripted by hand can be turned into a web component, which in turn can be tweaked by javascript inlines. Export your experiment as a Jatos zip file, and import it in JATOS (jatos.ilcb-online-test.net)

[To top](/docs/introduction#resources)


---

### PsychopyJs

[PsychopyJs](https://www.psychopy.org) added the facility to run studies online using a high-performance, hardware-accelerated, port of the PsychoPy Python library.

:::tip

PsychopyJs works great with Pavlovia.

:::


[To top](/docs/introduction#resources)


---

### JATOS

[JATOS](http://www.jatos.org), _Just Another Tool for Online Studies_, helps you set up and run your online studies on your own server.

:::tip

JATOS is available on the ILCB experiment server.

:::

[To top](/docs/introduction#resources)


---

### Pavlovia

[Pavlovia](https://pavlovia.org), where behaviour is studied. Supported by the Wellcome Trust and the University of Nottingham.

[To top](/docs/introduction#resources)


---

### The experiment factory

[The experiment factory](https://expfactory.github.io) builds Docker containers ready to be deployed on servers

[To top](/docs/introduction#resources)


---

### Netlify

[Netlify](https://www.netlify.com) hosts studies and take care of data collection. Their service is easy to use, free for basic studies, and inexpensive for large ones.

[To top](/docs/introduction#resources)


---

### Openlab

[Openlab](https://www.open-lab.online) takes care of running experiments and collecting, storing and managing data. The basic version of the application is available for free.

[To top](/docs/introduction#resources)


---

### SoSci
[SoSci](https://www.soscisurvey.de) is a solution for online questionnaires based in Germany.

Free for Non-commercial Research (promotion is a paid option).

[To top](/docs/introduction#resources)


---

### Sona systems

[Sona systems](http://www.sona-systems.com/participant-recruitment.aspx) virtualizes every aspect of the sign-up process, eliminating the frustration of paper-based methods and bulletin boards.

:::important
Please note that the use of Sona systems raises ethical questions as participation may be seen as low-paid jobs.
:::

[To top](/docs/introduction#resources)


---

### Prolific

[Prolific](https://www.prolific.co) collects high quality responses from people around the world within minutes.

:::important
Please note that the use of Prolific raises ethical questions as participation may be seen as low-paid jobs.
:::

Prolific had been initially designed by researchers in psychology. For participants, a minimum wage of $6.50 per hour is guaranteed, that is below the recommandation of  https://www.psychologicalscience.org/observer/under-the-hood-of-mechanical-turk.

[To top](/docs/introduction#resources)


---

###  Mechanical Turk

[Mechanical Turk](https://www.mturk.com) is a crowdsourced market place.

:::important
Please note that the use of Mechanical Turk raises ethical questions as participation may be seen as low-paid jobs.
:::

_"For some Americans, sub-minimum-wage online tasks are the only work available."_ as stated in this article https://www.theatlantic.com/business/archive/2018/01/amazon-mechanical-turk/551192/ : ).

Researchers in psychology had proposed standard wages of $7.50 an hour or above (see https://www.psychologicalscience.org/observer/under-the-hood-of-mechanical-turk).

[To top](/docs/introduction#resources)


---

### Labvanced

[Labvanced](https://www.labvanced.com) is a cloud solution for professional web based experiments

:::tip
ILCB user (with a _univ-amu_ Sesame account) can benefit from a Lab licence. For a licence, please ask this ILCB web site maintainer at https://github.com/lpc-cnrs-amu/online-xp-docs/issues.
:::

The Lab / Department licence has :

- Unlimited experiment creation
- CSV and Excel data export
- Unlimited Accounts / Logins
- Unlimited Published Studies at a time
- Importing all available experiments
- Unlimited Storage Space
- Unlimited Recordings for all Studies

along with this support conditions :

- Free Feasibility Check
- Free Template Suggestion
- General Information Counsel
- Answering Technical Questions
- Telephone / Video Call Assistance
- Experiment Implementation Supervision
- Customized Feature Implementation


[To top](/docs/introduction#resources)


---

### Limesurvey

[Limesurvey](https://www.limesurvey.org) is an open source survey software.

LimeSurvey (formerly PHPSurveyor) is a free and open source on-line statistical survey web app written in PHP based on a MySQL, SQLite, PostgreSQL or MSSQL database, distributed under the GNU General Public License. As a web server-based software it enables users using a web interface to develop and publish on-line surveys, collect responses, create statistics, and export the resulting data to other applications.

:::tip
ILCB users can access a free online instance of Limesurvey Community Edition at https://columbo.univ-amu.fr. To open an account, refer to the ENT help desk.
:::


---

##### ILCB users

On https://ent.univ-amu.fr, go to _e-scolarité_ then _limesurvey_ as in the following picture

![limesurvey-amu](/img/limesurvey-amu.png)

On April 2020, the service ran version 3.15.5. The main page consists of menu at the top including a tutorial and templates to load, and buttons for creating an questionnaire.


##### From the wikipedia page about limesurvey:

LimeSurvey is a web application that is installed to the user’s server. After installation users can manage LimeSurvey from a web-interface. Users can use rich text in questions and messages, using a rich text editor, and images and videos can be integrated into the survey. The layout and design of the survey can be modified under a template system. Templates can be changed in a WYSIWYG HTML editor. Additionally, templates can be imported and exported through the template editor. Once a survey is finalized, the user can activate it, making it available for respondents to view and answer. Likewise, questions can also be imported and exported through the editor interface. LimeSurvey has no limit on the number of surveys a user can create, nor is there a limit on how many participants can respond. Aside from technical and practical constraints, there is also no limit on the number of questions each survey may have.

Questions are added in groups. The questions within each group are organized on the same page. Surveys can include a variety of question types that take many response formats, including multiple choice, text input, drop-down lists, numerical input, slider input, and simple yes/no input. Questions can be arranged in a two-dimensional array, with options along one axis based on the questions on the other axis. Questions can depend on the results of other questions. For instance, a respondent might only be asked about transportation for his or her commute if he or she responded affirmatively to a question about having a job.

LimeSurvey also provides basic statistical and graphical analysis of survey results. Surveys can either be publicly accessible or be strictly controlled through the use of "once-only" tokens, granted only to selected participants. Additionally, participants can be anonymous, or LimeSurvey can track the IP addresses of the participants. A much more detailed listing of features can be found on the LimeSurvey web page.



[To top](/docs/introduction#resources)


---

### Qualtrics

[Qualtrics](https://www.qualtrics.com) is an online survey platform

[To top](/docs/introduction#resources)
