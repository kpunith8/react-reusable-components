module.exports = /* eslint-disable */ [{"name":"EyeIcon","description":"SVG Eye Icon","code":"import React from \"react\";\r\n\r\n/** SVG Eye Icon */\r\nfunction EyeIcon() {\r\n  // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\r\n  return (\r\n    <svg\r\n      width=\"16\"\r\n      height=\"16\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      viewBox=\"0 0 22 22\"\r\n    >\r\n      <g transform=\"matrix(.02146 0 0 .02146 1 1)\" fill=\"#4d4d4d\">\r\n        <path d=\"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1\" />\r\n        <circle cx=\"466.08\" cy=\"466.02\" r=\"134.5\" />\r\n      </g>\r\n    </svg>\r\n  );\r\n}\r\n\r\nexport default EyeIcon;\r\n","examples":[{"name":"ExampleEyeIcon","description":"","code":"import React from \"react\";\r\nimport EyeIcon from \"comp/EyeIcon\";\r\n\r\nexport default function ExampleEyeIcon() {\r\n  return <EyeIcon />;\r\n}\r\n"}]},{"name":"HelloWorld","description":"Simple HelloWorld component to demonstrate doc gen","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"\"World!\"","computed":false}}},"code":"import React from \"react\";\r\nimport PropTypes from \"prop-types\";\r\n\r\n/** Simple HelloWorld component to demonstrate doc gen */\r\nconst HelloWorld = ({ message }) => {\r\n  return <h1>Hello {message}</h1>;\r\n};\r\n\r\nHelloWorld.propTypes = {\r\n  /** Message to display */\r\n  message: PropTypes.string.isRequired\r\n};\r\n\r\nHelloWorld.defaultProps = {\r\n  message: \"World!\"\r\n};\r\n\r\nexport default HelloWorld;\r\n","examples":[{"name":"ExampleHelloWorld","description":"","code":"import React from \"react\";\r\nimport HelloWorld from \"comp/HelloWorld\";\r\n\r\nexport default function ExampleHelloWorld() {\r\n  return <HelloWorld message=\"Universe...!\" />;\r\n}\r\n"}]},{"name":"Label","description":"Label with required field display, htmlFor, and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after label if true"}},"code":"import React from \"react\";\r\nimport PropTypes from \"prop-types\";\r\n\r\n/** Label with required field display, htmlFor, and block styling */\r\nfunction Label({ htmlFor, label, required }) {\r\n  return (\r\n    <label style={{ display: \"block\" }} htmlFor={htmlFor}>\r\n      {label} {required && <span style={{ color: \"red\" }}>*</span>}\r\n    </label>\r\n  );\r\n}\r\n\r\nLabel.propTypes = {\r\n  /** HTML ID for associated input */\r\n  htmlFor: PropTypes.string.isRequired,\r\n\r\n  /** Label text */\r\n  label: PropTypes.string.isRequired,\r\n\r\n  /** Display asterisk after label if true */\r\n  required: PropTypes.bool\r\n};\r\n\r\nexport default Label;\r\n","examples":[{"name":"ExampleOptional","description":"Optional label","code":"import React from \"react\";\r\nimport Label from \"comp/Label\";\r\n\r\n/** Optional label */\r\nexport default function ExampleOptional() {\r\n  return <Label htmlFor=\"DOB\" label=\"DOB\" />;\r\n}\r\n"},{"name":"ExampleRequired","description":"Label required label","code":"import React from \"react\";\r\nimport Label from \"comp/Label\";\r\n\r\n/** Label required label */\r\nexport default function ExampleRequired() {\r\n  return <Label htmlFor=\"name\" label=\"Name\" required />;\r\n}\r\n"}]},{"name":"PasswordInput","description":"Password input with integrated label, quality tips, and show password toggle.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used by convention."},"value":{"type":{"name":"any"},"required":false,"description":"Password value"},"label":{"type":{"name":"string"},"required":false,"description":"Input label","defaultValue":{"value":"\"Password\"","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function called when password input value changes"},"maxLength":{"type":{"name":"number"},"required":false,"description":"Max password length accepted","defaultValue":{"value":"50","computed":false}},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder displayed when no password is entered"},"showVisibilityToggle":{"type":{"name":"bool"},"required":false,"description":"Set to true to show the toggle for displaying the currently entered password","defaultValue":{"value":"false","computed":false}},"quality":{"type":{"name":"number"},"required":false,"description":"Display password quality visually via ProgressBar, accepts a number between 0 and 100"},"error":{"type":{"name":"string"},"required":false,"description":"Validation error to display"}},"code":"import React from \"react\";\r\nimport PropTypes from \"prop-types\";\r\nimport ProgressBar from \"../ProgressBar\";\r\nimport EyeIcon from \"../EyeIcon\";\r\nimport TextInput from \"../TextInput\";\r\n\r\n/** Password input with integrated label, quality tips, and show password toggle. */\r\nclass PasswordInput extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      showPassword: false\r\n    };\r\n  }\r\n\r\n  toggleShowPassword = event => {\r\n    this.setState(prevState => {\r\n      return { showPassword: !prevState.showPassword };\r\n    });\r\n    if (event) event.preventDefault();\r\n  };\r\n\r\n  render() {\r\n    const {\r\n      htmlId,\r\n      value,\r\n      label,\r\n      error,\r\n      onChange,\r\n      placeholder,\r\n      maxLength,\r\n      showVisibilityToggle,\r\n      quality,\r\n      ...props\r\n    } = this.props;\r\n    const { showPassword } = this.state;\r\n\r\n    return (\r\n      <TextInput\r\n        htmlId={htmlId}\r\n        label={label}\r\n        placeholder={placeholder}\r\n        type={showPassword ? \"text\" : \"password\"}\r\n        onChange={onChange}\r\n        value={value}\r\n        maxLength={maxLength}\r\n        error={error}\r\n        required\r\n        {...props}\r\n      >\r\n        {showVisibilityToggle && (\r\n          <a\r\n            href=\"\"\r\n            onClick={this.toggleShowPassword}\r\n            style={{ marginLeft: 5 }}\r\n          >\r\n            <EyeIcon />\r\n          </a>\r\n        )}\r\n        {value.length > 0 && quality && (\r\n          <ProgressBar percent={quality} width={130} />\r\n        )}\r\n      </TextInput>\r\n    );\r\n  }\r\n}\r\n\r\nPasswordInput.propTypes = {\r\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\r\n  htmlId: PropTypes.string.isRequired,\r\n\r\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/\r\n  name: PropTypes.string.isRequired,\r\n\r\n  /** Password value */\r\n  value: PropTypes.any,\r\n\r\n  /** Input label */\r\n  label: PropTypes.string,\r\n\r\n  /** Function called when password input value changes */\r\n  onChange: PropTypes.func.isRequired,\r\n\r\n  /** Max password length accepted */\r\n  maxLength: PropTypes.number,\r\n\r\n  /** Placeholder displayed when no password is entered */\r\n  placeholder: PropTypes.string,\r\n\r\n  /** Set to true to show the toggle for displaying the currently entered password */\r\n  showVisibilityToggle: PropTypes.bool,\r\n\r\n  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */\r\n  quality: PropTypes.number,\r\n\r\n  /** Validation error to display */\r\n  error: PropTypes.string\r\n};\r\n\r\nPasswordInput.defaultProps = {\r\n  maxLength: 50,\r\n  showVisibilityToggle: false,\r\n  label: \"Password\"\r\n};\r\n\r\nexport default PasswordInput;\r\n","examples":[{"name":"ExampleAllFeatures","description":"All features enabled","code":"import React from \"react\";\r\nimport PasswordInput from \"comp/PasswordInput\";\r\n\r\n/** All features enabled */\r\nclass ExampleAllFeatures extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n\r\n    this.state = {\r\n      password: \"\"\r\n    };\r\n  }\r\n\r\n  getQuality() {\r\n    const length = this.state.password.length;\r\n    return length > 10 ? 100 : length * 10;\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <PasswordInput\r\n          htmlId=\"password-input-example-all-features\"\r\n          name=\"password\"\r\n          onChange={event => this.setState({ password: event.target.value })}\r\n          value={this.state.password}\r\n          minLength={8}\r\n          placeholder=\"Enter password\"\r\n          showVisibilityToggle\r\n          quality={this.getQuality()}\r\n          {...this.props}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default ExampleAllFeatures;\r\n"}]},{"name":"ProgressBar","description":"","props":{"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}},"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"}},"code":"import React, { Component } from \"react\";\r\nimport PropTypes from \"prop-types\";\r\n\r\nclass ProgressBar extends Component {\r\n  getColor = percent => {\r\n    if (this.props.percent === 100) return \"green\";\r\n    return this.props.percent > 50 ? \"lightgreen\" : \"red\";\r\n  };\r\n\r\n  getWidthAsPercentOfTotalWidth = () => {\r\n    return parseInt(this.props.width * (this.props.percent / 100), 10);\r\n  };\r\n\r\n  render() {\r\n    const { percent, width, height } = this.props;\r\n    return (\r\n      <div style={{ border: \"solid 1px lightgray\", width: width }}>\r\n        <div\r\n          style={{\r\n            width: this.getWidthAsPercentOfTotalWidth(),\r\n            height,\r\n            backgroundColor: this.getColor(percent)\r\n          }}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nProgressBar.propTypes = {\r\n  /** Bar width */\r\n  width: PropTypes.number.isRequired,\r\n\r\n  /** Bar height */\r\n  height: PropTypes.number,\r\n\r\n  /** Percent of progress completed */\r\n  percent: PropTypes.number.isRequired\r\n};\r\n\r\nProgressBar.defaultProps = {\r\n  height: 5\r\n};\r\n\r\nexport default ProgressBar;\r\n","examples":[{"name":"Example100Percent","description":"100% progress and width height 10px","code":"import React from \"react\";\r\nimport ProgressBar from \"comp/ProgressBar\";\r\n\r\n/** 100% progress and width height 10px */\r\nexport default function Example100Percent() {\r\n  return <ProgressBar percent={100} width={250} height={10} />;\r\n}\r\n"},{"name":"Example10Percent","description":"10% progress","code":"import React from 'react';\r\nimport ProgressBar from 'comp/ProgressBar';\r\n\r\n/** 10% progress */\r\nexport default function Example10Percent() {\r\n  return <ProgressBar percent={10} width={150} />\r\n}"},{"name":"Example50Percent","description":"70% progress","code":"import React from 'react';\r\nimport ProgressBar from 'comp/ProgressBar';\r\n\r\n/** 70% progress */\r\nexport default function Example50Percent() {\r\n  return <ProgressBar percent={70} width={150} />\r\n}"}]},{"name":"TextInput","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"\"text\"","computed":false},{"value":"\"number\"","computed":false},{"value":"\"password\"","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"\"text\"","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from \"react\";\r\nimport PropTypes from \"prop-types\";\r\nimport Label from \"../Label\";\r\n\r\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\r\nfunction TextInput({\r\n  htmlId,\r\n  name,\r\n  label,\r\n  type = \"text\",\r\n  required = false,\r\n  onChange,\r\n  placeholder,\r\n  value,\r\n  error,\r\n  children,\r\n  ...props\r\n}) {\r\n  return (\r\n    <div style={{ marginBottom: 16 }}>\r\n      <Label htmlFor={htmlId} label={label} required={required} />\r\n      <input\r\n        id={htmlId}\r\n        type={type}\r\n        name={name}\r\n        placeholder={placeholder}\r\n        value={value}\r\n        onChange={onChange}\r\n        style={error && { border: \"solid 1px red\" }}\r\n        {...props}\r\n      />\r\n      {children}\r\n      {error && (\r\n        <div className=\"error\" style={{ color: \"red\" }}>\r\n          {error}\r\n        </div>\r\n      )}\r\n    </div>\r\n  );\r\n}\r\n\r\nTextInput.propTypes = {\r\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\r\n  htmlId: PropTypes.string.isRequired,\r\n\r\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\r\n  name: PropTypes.string.isRequired,\r\n\r\n  /** Input label */\r\n  label: PropTypes.string.isRequired,\r\n\r\n  /** Input type */\r\n  type: PropTypes.oneOf([\"text\", \"number\", \"password\"]),\r\n\r\n  /** Mark label with asterisk if set to true */\r\n  required: PropTypes.bool,\r\n\r\n  /** Function to call onChange */\r\n  onChange: PropTypes.func.isRequired,\r\n\r\n  /** Placeholder to display when empty */\r\n  placeholder: PropTypes.string,\r\n\r\n  /** Value */\r\n  value: PropTypes.any,\r\n\r\n  /** String to display when error occurs */\r\n  error: PropTypes.string,\r\n\r\n  /** Child component to display next to the input */\r\n  children: PropTypes.node\r\n};\r\n\r\nexport default TextInput;\r\n","examples":[{"name":"ExampleError","description":"Required TextBox with error","code":"import React from \"react\";\r\nimport TextInput from \"comp/TextInput\";\r\n\r\n/** Required TextBox with error */\r\nexport default class ExampleError extends React.Component {\r\n  render() {\r\n    return (\r\n      <TextInput\r\n        htmlId=\"example-optional\"\r\n        label=\"First Name\"\r\n        name=\"firstname\"\r\n        onChange={() => {}}\r\n        required\r\n        error=\"First name is required.\"\r\n      />\r\n    );\r\n  }\r\n}\r\n"},{"name":"ExampleOptional","description":"Optional TextBox","code":"import React from \"react\";\r\nimport TextInput from \"comp/TextInput\";\r\n\r\n/** Optional TextBox */\r\nexport default class ExampleOptional extends React.Component {\r\n  render() {\r\n    return (\r\n      <TextInput\r\n        htmlId=\"example-optional\"\r\n        label=\"First Name\"\r\n        name=\"firstname\"\r\n        onChange={() => {}}\r\n      />\r\n    );\r\n  }\r\n}\r\n"}]}]