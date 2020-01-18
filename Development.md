# device-size Development

Install development dependencies, do not save them in *package.json*.

```bash
npm install cson markdown2code --no-save
```

README.md file contains annotated source code in [cson](https://github.com/bevry/cson) format.
It is flagged as `yaml` to enable code highlighting.

For example, to add a device edit the [Annotated Source section](https://github.com/fibo/device-size/blob/master/README.md#annotated-source) and add something like the following

    ### Device Name

    ```yaml
      DeviceName:
        device: 'Device Name'
        width: 1280
        height: 824
    ```

First generate JSON, launch

```bash
npm run build:json
```

It will extract *cson* code from README.md and will write it in *device-size.json* file.

Then generate JavaScript module, launch

```bash
npm run build:js
```

Running tests with

```bash
npm test
```

will trigger both `build:json` and `build:js` npm scripts.
