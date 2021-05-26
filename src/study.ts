declare var lab: any

const fixationCross = () => {
    return new lab.html.Screen({
        content: '+',
        timeout: 1000
    })
}

const ds = new lab.data.Store()

// Define the sequence of components that define the study

const study = new lab.flow.Sequence({
    content: [
      fixationCross(),
      new lab.html.Screen({
        content: '<div style="color: red"> blue </div>',
        datastore: ds,
        data: {
          'var1':'value1'
        },
        responses: {
          'keypress(r)': 'red',
          'keypress(g)': 'green',
          'keypress(b)': 'blue',
        }
      }),
      new lab.html.Screen({
        content: 'Press A!',
        datastore: ds,
        data: {
          'varA':'valueA'
        },
        responses: {
          'keypress(a)': 'correct'
        }
      }),
      fixationCross(),
      new lab.html.Screen({
        content: 'Press B!',
        datastore: ds,
        data: {
          'var1B':'valueB'
        },
        responses: {
            'keypress(b)': 'correct'
        }
      }),
      new lab.html.Screen({
        content: 'Done!',
      }),
    ],
})


// Start the study (uncomment to run)
study.on('end', () => {
    ds.download()
    console.log('ds download')
})
study.run()