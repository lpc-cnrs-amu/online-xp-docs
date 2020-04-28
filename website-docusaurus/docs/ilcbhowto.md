---
id: ilcbhowto
title: How to start
sidebar_label: How-to
---
import Mermaid from '@theme/Mermaid';

:::important
**Labvanced.com** : _hosted on Labvanced servers (independant from ILCB servers)_. The ILCB Institute, as well as its constutuent labs, had financed a long-term licence of the Labvanced.com service.
:::


:::important
**JATOS** :  _hosted on servers managed by ILCB_. Concerning the ILCB server, we opted for a cloud web (server hosted by [DigitalOcean](https://www.digitalocean.com)) with a [JATOS](http://www.jatos.org) experiment manager. Regular PHP/MySQL/JavaScript experiments can also be run on this server.
:::






## Easy path

---

### Labvanced


<Mermaid chart={`
	graph LR;
	    id1(<br>Labvanced<br>)-->id1(<br>Labvanced<br>);
`}/>

Labvanced is a self-contained solution. One can build and run an experiment from labvanced.com on their servers. **The Labvanced support service is reachable online, by phone or by video-calls**.

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


![labvanced-amu](/img/labvanced.png)


##### Videos

From Labvanced.com help website (https://www.labvanced.com/video_tutorials_eng.html)

- [Main Overview: A quick overview about all functions](https://www.labvanced.com/video_tutorials_eng.html#LabvancedOverview)
- [Study Design: Find out about tasks, blocks, sessions & groups](https://www.labvanced.com/video_tutorials_eng.html#StudyDesign)
- [Publishing: How to publish your study and record data](https://www.labvanced.com/video_tutorials_eng.html#Publishing)


##### Text help

A detailed explanation can be found [here](https://www.labvanced.com/page/documentation_eng).




---

### Lab.js + JATOS

<Mermaid chart={`
	graph LR;
	    id1(in Lab.js <br> Export to JATOS)-->| transfert |id2(in JATOS <br> Import Study);
`}/>

lab.js is an easy to use tool to create online experiments. Their Builder makes creating an online experiment a piece of cake - although you can also write code yourself: lab.js supports this too.

lab.js and JATOS fit perfectly together: lab.js directly exports JATOS studies. So you don’t need to write or modify any bits of code. You can create your experiment with lab.js. Then just import your studies into JATOS and let particpants run it.

To reach support for specific technical questions, please refer to https://github.com/lpc-cnrs-amu/online-xp-docs/issues. We might open new channels of discussion depending on demand.

##### References

From JATOS doc site
- [Lab.js and JATOS](http://www.jatos.org/labjs-and-JATOS.html)

From Lab.js doc site
- [Collecting data with JATOS](https://labjs.readthedocs.io/en/latest/learn/deploy/3c-jatos.html)


##### Videos

From Lab.js Vimeo Channel ([Felix Henninger](https://vimeo.com/felixhenninger))
- [Introduction to lab.js](https://vimeo.com/241310293)
- [Collecting data on the server using PHP](https://vimeo.com/248002608)


---

### OSWeb + JATOS


<Mermaid chart={`
	graph LR;
	    id1(in OSWeb <br> Export to JATOS)-->| transfert |id2(in JATOS <br> Import Study);
`}/>

OSWeb lets you run an OpenSesame experiment on a browser. OpenSesame is a pretty neat program to create experiments for psychology, neuroscience, and experimental economics. You can get very far with drag-and-drop, and there’s the chance to add code snippets if you need more flexibility.

OSWeb’s documentation is far better than ours could ever be. So, here, we just point out that combining OSWeb with JATOS is pretty easy and straightforward: just export the experiment in OSWeb and import it in JATOS.

If you want to use Prolific to recruit participants for your OSWeb experiment running in JATOS then you can put the return link in the ‘End Redirect URL’ field of your Study Properties (in JATOS GUI, since JATOS v3.5.1).

That’s all there is to say. If you’d like to know more, Sebastiaan Mathot’s tutorial is the place to start.

To reach support for specific technical questions, please refer to https://github.com/lpc-cnrs-amu/online-xp-docs/issues. We might open new channels of discussion depending on demand.

##### References

From JATOS doc site
- [OSweb and JATOS](http://www.jatos.org/OSWeb-and-JATOS.html)

##### Videos

From OpenSeasame Youtube Channel ([Sebastiaan Mathot](https://www.youtube.com/channel/UC6HfeAa0vWeSWS6IcNAjZ2A))

- [OpenSesame tutorial Implicit Association Task (beginner's level)](https://www.youtube.com/watch?v=zd-nxgGOGlE)
- [Creating online psychology experiments with OpenSesame](https://www.youtube.com/watch?v=0448NeoUaqU)
- [Creating a psychology experiment with OpenSesame 3.1](https://www.youtube.com/watch?v=FCXcnAv9aMA)
- [Online psychology experiments with OSWeb and JATOS (#1 ): Inline JavaScript](https://www.youtube.com/watch?v=-DHAX_EyKlE)
- [Online psychology experiments with OSWeb and JATOS (#2): Distributing links](https://www.youtube.com/watch?v=m1UDk5kBwH4)
- [Online psychology experiments with OSWeb and JATOS (#3): Downloading data from JATOS](https://www.youtube.com/watch?v=P1QWcqTnLJ0)





## Advanced path

---

### JsPsych + JATOS


<Mermaid chart={`
	graph LR;
	    id1( In a folder <br> JavaScript files with JsPsych library <br> that integrate JATOS subroutine)-->| transfert |id2(JATOS <br> Import Study);
`}/>


jsPsych is a JavaScript library for running behavioral experiments in a web browser. The library provides a flexible framework for building a wide range of laboratory-like experiments that can be run online.

To use jsPsych, you provide a description of the experiment in the form of a timeline. jsPsych handles things like determining which trial to run next, storing data, and randomization. jsPsych uses plugins to define what to do at each point on the timeline. Plugins are ready-made templates for simple experimental tasks like displaying instructions or displaying a stimulus and collecting a keyboard response. Plugins are very flexible to support a wide variety of experiments. It is easy to create your own plugin if you have experience with JavaScript programming.

JATOS basically cares for the server side: it stores result data, does worker management etc.

##### References

From JsPsych web site
- [jsPsych "Hello world" experiment](https://www.jspsych.org/tutorials/hello-world/)
- [jsPsych "Simple Reaction Time" task](https://www.jspsych.org/tutorials/rt-task/)


From JATOS doc site
- [jsPsych and JATOS](http://www.jatos.org/jsPsych-and-JATOS.html)
- [Adapt Pre written Code to run it in JATOS (Jatosify)](http://www.jatos.org/Adapt-Pre-written-Code-to-run-it-in-JATOS.html)


---
