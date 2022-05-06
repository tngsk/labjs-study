// ------------------------------------------------------------

// TODO: dsが機能しない問題あり
const ds = new lab.data.Store();

const c = new lab.core.Component({
  title: "hello-labjs",
  datastore: new lab.data.Store(),
  // datastore: ds,
  data: { variable: "value" },
  content: "実験中",
  debug: false,
  responses: {
    "keypress(s)": "left",
    "keypress(l)": "right",
  },
  // timeout: 5000,
});

c.waitFor("run").then(() => {
  console.log("run");
});
// c.waitFor("run").then(() => console.log("run"));
// c.waitFor("end").then(() => console.log("end"));

c.waitFor("end").then(() => {
  c.options.datastore.download();
  // ds.download();
});

// c.run();

// ------------------------------------------------------------

const seq = new lab.flow.Sequence({
  datastore: ds,
  content: [
    new lab.core.Component({
      content: "A",
      responses: { "keypress(Space)": "A" },
    }),
    new lab.core.Component({
      content: "B",
      responses: { "keypress(Space)": "B" },
    }),
    new lab.core.Component({
      content: "C",
      responses: { "keypress(Space)": "C" },
    }),
  ],
});

seq.waitFor("end").then(() => {
  seq.options.datastore.download();
});
seq.run();
