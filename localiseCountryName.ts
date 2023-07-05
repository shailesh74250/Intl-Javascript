import {getCountries, getCountryCallingCode} from 'libphonenumber-js'

const getCountriesData = (language: string) => {
    const countryIsos = getCountries()
    const regionNames = new Intl.DisplayNames(
      [language], {type: `region`}
    )
    return countryIsos.map((countryIso) => {
      return {
        code: countryIso,
        dialCode: `+${getCountryCallingCode(countryIso)}`,
        name: regionNames.of(countryIso),
      }
    })
  }

  console.log(getCountriesData(`fr`))
