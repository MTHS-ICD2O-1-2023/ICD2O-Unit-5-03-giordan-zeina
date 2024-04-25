// Copyright (c) 2024 Giordan Zeina All rights reserved
//
// Created by: Giordan Zeina
// Created on: April 2024
// This file contains the JS functions for index.html

function myButtonClicked() {

  const age = parseInt(document.getElementById('age-entered').value)

  if (age >= 18) {

    document.getElementById('answer').innerHTML = 'You can see an R rated movie alone.'

  } else if (age >= 13) {

    document.getElementById('answer').innerHTML = 'You can see a PG-13 movie alone.'

  } else if (age >= 9) {

    document.getElementById('answer').innerHTML = 'You can see a G or PG rated movie alone.'

  } else if (age >= 6) {

    document.getElementById('answer').innerHTML = 'You can see a G rated movie alone.'

  }

}
