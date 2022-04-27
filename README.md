# AstroNft

## Overview
![Overview](documents/AstroNftBlockDiagram.jpg)

## Purpose of Application
* Generate Birth Chart that gives a visual presentation of ascending Zodiac sign and planetary positions in the sky as they appear in the sky at the time of birth. When you stand facing east direction (with right hand pointing to south), you will be seeing your ascendant sign rising in the East at the time of your birth.
 
* Interactive display of Houses also known as Bhavas or fields of action, where different areas of life are highlighted. Textual description of the Houses are shown in a side panel. The content will originate from a service provider that the user has a subscription to. If the user does not have subscription with a service provider, he can view auto generated content using an AI system for fun.
 
* The application can create/mint an NFT(Non Fungible Token) on a Blockchain. We refer to this token as AstroNFT in the remaining part of this document. AstroNFT provides a unique ID that will be used to manage user subscriptions. AstroNFT token holders are users as well as owners of the platform. AstroNFT is transferable.

* This web application interacts with AstroNFT Platform to (1) display the content obtained from a service provider and (2) authorize payment dues that will be settled on the Blockchain. AstroNFT platform helps a service provider to reach a wider audience and users with a choice to select a provider.

## Service Provider Protocol for House or Bhava Details
The service provider can generate the data either to display and view interactively in the application or in a form that can be viewed outside the application.
### Introduction
Both Vedic and Western astrology systems use the House system to group the attributes and analyze.
The birth chart includes 12 houses starting from the ascending sign. There are several systems to construct the houses such as placidus, whole-sign, equal house system etc,. Equal house system is the simplest and we will use the system in this application. 

Each house covers certain attributes of an individual. Some simplistic approaches cover the Zodiac sign of Sun and/or Zodiac sign of the Moon as the Zodiac sign of the individual to predict the tendencies that result into either 12 categories(Sun or Moon) or 144(Sun and Moon) categories. The House or Bhava system is more complex as it considers placement of all the planets in the 12 signs as well as ascending sign at the time of birth. This creates billions of different charts(12x12**9 i.e. 12 houses and 12 signs that can be occupied by 9 planets with various combinations).
 
The application displays the following parameters used in Vedic House System. The information provided by the service provider can be corresponding to these elements.  
#### Attributes related to a house
The application allows user to interact with the chart. When user selects a house, the service provider API is called to fetch the details of the house and displayed in the side panel. The attributes covered by each house is tabulated below:


  House | Attributes
  ------| ----------  
  House1| Intellect, Health, Appearance, Beauty, Character, Purpose of Life, Behaviour, 
  House2| Health, Family, Comforts, Early Education, Speech, Movable Assets   
  House3| Younger Siblings, Communication, Intelligence, Fine Arts, Short Journeys  
  House4| Mother, Emotion Education, Home, Property, Surrounding in Old Age, Vehicles 
  House5| Children, Recreation, Devotion, Speculation, Accumulated Karma  
  House6| Diseases, Maternal Uncle/Aunt, Litigation, Mental Worries 
  House7| Spouse, Business Partner, Death, Respect Passion 
  House8| Longevity, Obstacles, Suffering, Attractiveness, Inheritance, Accidents  
  House9| Father, Luck, Higher Learning, Philosophy, Guru, Prosperity, Travel, Deeds of Virtue 
  House10| Profession, Status and Fame, Power, Father, Mother-in-law 
  House11| Friends, Hopes, Earnings, Social Activities, Elder Siblings 
  House12| Expenses, Sleep, Spirituality,  Pilgrimage, Liberation, Foreign residency   
#### Zodiac Signs
The attributes of the house are influenced by the sign the house is located in. Each Zodiac sign is ruled by a planet. The characteristcs of the ruling planet and the house where it is currently located influences the attributes of the house under consideration. For example if the attributes of house1 such as intellect, character of the person is assessed: (1) Find the zodiac sign where house1 is located. Then find the ruling planet of the sign and then find which sign/house the ruling planet is currently in.

Sign| Ruling Planet
----|--------------
Aries | Mars
Taurus | Venus
Gemini | Mercury
Cancer | Moon
Leo | Sun
Virgo | Mercury
Libra | Venus
Scorpio | Mars
Sagittarious | Jupiter
Capricorn | Saturn
Aquarious | Saturn
Pisces | Jupiter

#### Planetary postitions 

#### Planetary Aspects  

Aspects are important and compex to interpret.
There are two kinds of planetary aspects.
* Aspects based on placement in a Sign (Sign Aspect)
* Aspects based on nature of a planet

A planet placed in a sign aspects planets in other signs as follows:

sign (with planet) | aspecting signs
-----------------|----------------
Aries            | Leo, Scorpio, Aquarius 
Taurus           | Cancer, Libra, Capricorn
Gemini           | Virgo, Sagittarius, Pisces
Cancer           | Scorpio, Aquarius, Taurus
Leo              | Libra, Capricorn, Aries
Virgo            | Sagittarius, Pisces, Gemini
Libra            | Aquarius, Taurus, Leo
Scorpio          | Capricorn, Aries, Cancer
Sagittarious     | Pisces, Gemini, Virgo
Capricorn        | Taurus, Leo, Scorpio
Aquarious        | Aries, Cancer, Libra
Pisces           | Gemini, Virgo, Virgo

Planet| Aspecting House (Planets in it)
------|-----------
Sun, Moon, Mercury, Venus|  1/4th effect on 3,10. 1/2 effect on 5,9. 3/4 effect on 4,8. Full effect on 7
Mars    | 1/4th effect on 4,9. 1/2 effect on 4,8. 3/4 effect on 7. Full effect on 3,10
Jupiter | 1/4th effect on 4,8. 1/2 effect on 7. 3/4 effect on 3,10. Full effect on 5,9
Saturn  | 1/4th effect on 7. 1/2 effect on 3,10. 3/4 effect on 5,9. Full effect on 4,8

#### Planet Relationships  
Planets have friend/enemy/neutral relationships that play a role while anayzing aspects such as conjuction and trines etc. Friendly planets will enahance the net influence and vice versa.

Planet| Friend |Enemy| Neutrals
-------|-------|-----|-------
Sun    | Moon, Mars, Jupiter| Venus, Saturn | Mercury
Moon   | Sun, Mercury       |               | Mars, Jupiter, Venus, Saturn
Mars   | Sun Moon, Jupiter  | Mercury       | Venus, Saturn
Mercury| Sun, Venus         | Moon          | Mars, Jupiter, Saturn
Venus  | Mercury, Saturn    | Moon, Sun     |  Mars, Jupiter
Jupiter| Sun, Moon, Mars    | Mercury, Venus | Saturn
Saturn | Mercury, Venus     | Sun, Moon, Mars| Jupiter

#### Planetary Exaltations and Debilations
The planets exert their maximum influence when in exalted state and in debilated states the influence is mininal. These states coupled with aspecting of other planets decides the influence.
Planet   | Exaltation Sign| Deep Exaltaton Degrees    |   Debilation | Deep Debilation | Moola Trikona
---------|----------------|---------------------------|------------|-----------------|--------
Sun      | Aries          | 10            | Libra     | 10  | Leo 0-20 
Moon     | Taurus         | 3             | Scorpio   | 3   | Taurus 4-30
Mars     | Capricorn      | 28            | Cancer    | 28  | Aries 0-12
Mercury  | Virgo          | 15            | Pisces    | 15  | Virgo 15-20
Venus    | Pisces         | 27            | Virgo     | 27  | Libra 0-15    
Jupiter  | Cancer         | 5             | Capricorn | 5   | Sagittarius 0-10
Saturn   | Libra          | 20            | Aries     | 20  | Aquarius 0-20

#### Divisional charts 
Chart| Attributes
-----|-------
D1| The analysis of D2 gives clarity to identify the planets in horoscope that support income generation, wealth and asset building. Presence of Sun, Mars, Jupiter and Rahu in Leo will help to attain wealth. Presence of Moon, Venus and Saturn in Cancer will bring auspicious results with respect to wealth
D3| The analysis of D3 provides a deep insight in to bravery, courage, and siblings. They can also represent the hidden personalities, inner nature, and behavior of an individual
D4| This chart represents fortunes, fate, assets, shelter, inherited property, and place of living. The chart also shows the inheritance of assets, location and nature of house or residence, vehicle, and other material aspects of the possessions
D7| Sapthamsha is an expanded view of the 5th house in a Rashi Chart. From this chart we can get information about the native’s happiness from his children, grandchildren as also the disappointments faced from them.
D9|  It is usually used during predictions about marriage of the native, spouse, married life etc but is also useful to know characteristics of the native and also his/her spouse in much detail.
D10| This chart indicates the career, power, position, name and fame, social status, and success. The D10 chart is an extension of the 10th house of the birth chart
D12| Dwadasamsa chart is a tool to understand the childhood and the parental influence on the native. Ancestral lineage and legacies, upbringing can be traced in this chart
D20|  Vimsamsa chart or D20 chart is analysed for spiritual inclination, philosophical nature, devotion quotient of an individual. A native’s religious beliefs, the magnitude of faith, devotion and worship towards their Ishtadevata can be examined
D27| D27 chart represents the overall strength, stamina & weakness of a native. The general vitality of a person can be seen from this chart.
D30| D30 chart is used to identify misfortunes, health mishaps, and enemies of a native. The source of misfortune or miseries can be natural disaster,from profession,accidents,from children,family problems or property disputes,etc.The Trimshamsha is the indicator of these sources
D40| The D40 or khavedamsha chart suggest how much happiness we get from Professional activities. It gives insight in to career and karma areas
D45| Akshavedamsa or D45 chart is used to analyze the paternal legacy, conduct, and nature of a native. Both material and physical aspects of these karmic patterns in a native, inherited through the father and his ancestors, are available in the D45 chart
D60| Shastiamsa, or D60 Chart is used to study the accumulated Karma from past incarnations and the overall life of a native. D60 chart shows a very detailed picture of past life karma – Sanchita Karma. It can help us determine the time when karma comes into fruition. The Sashtiamsa chart can go deep into the very cause of a native’s re-birth reasons and lessons.
  

### Protocol for communication with Service Provider
The API call to service provider includes an  API request that indicates the planetary positions either using Zodiac signs or offset in degrees from start of  Aries as following:

### D1 Chart Analysis
Example Queries:
Query Based on planetary positions spefified using Zodiac signs
```
https://api.astronft.org/analyse/?house=1&asc=aries&sun=leo&moon=cancer&mars=aries&venus=taurus&mercury=gemini&saturn=aquarius&jupiter=sagittarius&rahu=aries&ketu=libra
```

Query Based on planetary positions spefified in degrees from start of Aries. Three decimal digits for each planet from right to left in the order ascendant, sun, moon, mercury, venus, mars, jupiter, saturn, rahu & ketu
```
https://api.astronft.org/analyse/house=1&planets=000030060090120150160180250290
```

The service returns the details of the house requested.

### Dn (D2, D3...D60) Chart Analysis

Example Query to get details of D2 Chart
```
https://api.astronft.org/analyse/dn=2&planets=000030060090120150160180250290
```
### Protocol for communication with Blockchain
--TODO-
#### Browse Service Providers
Returns a list of Service Provides that contains (Specialization, Fee, Rating, Exp Delivery)  

#### Request Service
Request a service by sending (Escrow)  

#### Poll for completon of pending service requests  
Request a service by sending (Escrow)  

#### Poll for completon of pending service requests  
Request a service by sending (Escrow)  


#### Retrieve completed service requests  

