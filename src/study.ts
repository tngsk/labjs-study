declare var lab: any
declare var options: any

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
      responses: {
        'mouseup(@1)': '1',
        'mouseup(@2)': '2',
      },
      messageHandlers: {
        'before:prepare': function () {

          (<any>this).options.content.push({
            type: 'aoi',
            left: 0,
            top: 0,
            width: 100,
            height: 100,
            label: '1'
          });

          (<any>this).options.content.push(
          {
            type: 'ellipse',
            left: 0,
            top: 0, 
            width:100, // circle, lineの場合，ここのみ指定 textでは変化しない
            height:100,
            fill:'rgb(255,0,0)',// nullまたは'red' 'rgb(X,X,X)'
            stroke:'black', // nullまたは'red' 'rgb(X,X,X)'
            strokeWidth:'10',
            angle: 0
            })
          
          // (<any>this).options.events['click'] = (e: any) => {
          //   console.log(e.clientX);
          //   console.log(e.clientY);
          //   console.log(document.documentElement.clientWidth);
          //   console.log(document.documentElement.clientHeight);
          //   (<any>this).end();
          // }
        }
      }
      }),
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