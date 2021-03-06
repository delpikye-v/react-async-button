<div align="center">
    <h1>react-async-button-z</h1>
    <strong>
        <a href="https://www.npmjs.com/package/react-async-button-z">react-async-button-z</a>
    </strong>
    <br />
    <br />
    <a href="https://codesandbox.io/s/hrhss">LIVE EXAMPLE</a>
</div>

---

##### Description
+ Simple lock button.

##### Usage
```js
npm install --save react-async-button-z
```

Import the module in the place you want to use:
```js
import AsyncButton from "react-async-button-z";
import "react-async-button-z/build/styles.css";
```

#### Snippet
```js
    // handler by props
    const [isAsync, setAsync] = useState(false)

    const fetchApi() {
        setAsync(true)
        fetch('')....finally(() => setAsync(false))
    }

    <AsyncButton isAsync={isAsync} onClick={fetchApi} text="abcd" />
```

```js
    // handler by async Promise
    const fetchApi = () => {
        return new Promise(resovle => {
            // do something
            setTimeout(() => {
                // make done
                resovle()
            }, 5000)
        })
    }

    <AsyncButton asyncFunc={fetchApi} text="abcd" loadingText="loading" />
```

##### Props

| props                | type                          | description                                                                |
|----------------------|-------------------------------|----------------------------------------------------------------------------|
| className            | String                        |                                                                            |
| theme                | String                        | default: ring                                                              |
| indicatorColor       | String                        | default: #000000                                                           |
| size                 | Number                        | default: 10 (indicator size)                                               |
| isAsync              | boolean                       | your handler async by props (change true /false )                          |
| onClick              | func                          | your handler async by props                                                |
| text                 | any                           | better if it is string label                                               |
| loadingText          | any                           | when async                                                                 |
| timeout              | number                        | if auto make icon async (default: 0 => none)                               |
| asyncFunc            | func                          | your handler async by a promise                                            |
| `...props`           | props                         | props of button                                                            |

##### Note

<br />

##### Example
<a href="https://codesandbox.io/s/hrhss">LIVE EXAMPLE</a>

A working example can be found in the `example` directory.

```js
npm install
```
```js
npm run dev
npm run start
```

### License
MIT
