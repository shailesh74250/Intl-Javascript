# Intl-Javascript
Intl internationalization API provided by Javascript


### The Intl.DisplayNames object is an internationalization API provided by JavaScript that allows you to retrieve localized versions of various display names, such as languages, regions, scripts, currencies, and more. It helps developers display these names correctly based on the user's locale or a specific locale provided.

The Intl.DisplayNames API was introduced in ECMAScript Internationalization API Specification (ECMA-402) and is available in modern web browsers that support the ECMAScript 2018 (ES9) or later versions.

Here's an example of how you can use the Intl.DisplayNames API to retrieve localized language display names:

const displayNames = new Intl.DisplayNames(['en'], { type: 'language' });
console.log(displayNames.of('fr')); // Output: "French"
console.log(displayNames.of('de')); // Output: "German"
console.log(displayNames.of('es')); // Output: "Spanish"

In this example, we create a new Intl.DisplayNames instance by specifying the locale 'en' (English) and the type as 'language'. Then, we use the of method to retrieve the display names of different languages.




### You can also provide specific locales instead of relying on the user's default locale. Here's an example:

const displayNames = new Intl.DisplayNames(['en', 'es'], { type: 'region' });
console.log(displayNames.of('US')); // Output: "United States"
console.log(displayNames.of('CA')); // Output: "Canada"
console.log(displayNames.of('MX')); // Output: "México"

In this case, we pass an array of locales ['en', 'es'] to the Intl.DisplayNames constructor, indicating that we want to retrieve the display names of regions. The of method is then used to retrieve the display names of specific regions based on their codes.

You can explore the Intl.DisplayNames API further to retrieve display names for other types, such as scripts, currencies, calendars, and more, by adjusting the type parameter and the values passed to the of method.

