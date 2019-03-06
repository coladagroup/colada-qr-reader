import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const p1 = 'M32.421,56.622c-0.75,0.469-1.541,0.856-2.373,1.16c-0.832,0.305-1.676,0.55-2.531,0.739'
  + 'c-0.855,0.188-1.693,0.321-2.514,0.405c-0.82,0.082-1.582,0.122-2.285,0.122c-3.469,0-6.328-0.417-8.578-1.248'
  + 'c-2.25-0.832-4.025-2.051-5.327-3.655c-1.3-1.606-2.203-3.581-2.707-5.924c-0.504-2.344-0.756-5.016-0.756-8.016'
  + 'c0-2.953,0.329-5.578,0.985-7.875c0.656-2.297,1.682-4.237,3.076-5.818c1.395-1.583,3.188-2.789,5.379-3.622'
  + 'c2.191-0.832,4.834-1.248,7.928-1.248c0.773,0,1.576,0.04,2.408,0.122c0.832,0.083,1.664,0.212,2.496,0.387'
  + 'c0.832,0.175,1.635,0.404,2.408,0.685c0.773,0.281,1.476,0.622,2.109,1.019l-1.582,6.47c-0.516-'
  + '0.164-1.079-0.3-1.688-0.405c-0.609-0.106-1.225-0.193-1.846-0.264c-0.621-0.07-1.225-0.117-1.811-0.141'
  + 'c-0.586-0.022-1.102-0.035-1.547-0.035c-1.477,0-2.725,0.199-3.744,0.598c-1.02,0.399-1.846,1.02-2.479,1.863'
  + 'c-0.633,0.844-1.09,1.911-1.371,3.2c-0.281,1.288-0.422,2.812-0.422,4.569c0,1.736,0.147,3.311,0.439,4.729'
  + 'c0.293,1.418,0.779,2.631,1.459,3.638c0.679,1.008,1.582,1.782,2.707,2.32c1.125,0.54,2.52,0.809,4.184,0.809'
  + 'c0.305,0,0.721-0.018,1.248-0.053c0.528-0.035,1.102-0.088,1.723-0.159'
  + 'c0.621-0.069,1.248-0.158,1.881-0.264c0.633-0.106,1.219-0.228,1.758-0.369L32.421,56.622z'

const p2 = 'M36.745,40.625c0-3.069,0.393-5.788,1.178-8.155c0.785-2.367,1.939-4.36,3.463-5.976'
  + 'c1.523-1.619,3.393-2.849,5.607-3.692c2.215-0.843,4.764-1.266,7.646-1.266c2.695,0,5.098,0.404,7.207,1.212'
  + 'c2.109,0.809,3.878,1.993,5.309,3.551c1.43,1.56,2.52,3.475,3.27,5.748c0.75,2.274,1.125,4.875,1.125,7.805'
  + 'c0,3.093-0.387,5.841-1.16,8.244c-0.773,2.403-1.904,4.418-3.393,6.048c-1.488,1.628-3.316,2.87-5.484,3.726'
  + 'c-2.168,0.855-4.659,1.283-7.471,1.283c-2.789,0-5.256-0.411-7.4-1.23c-2.145-0.82-3.949-2.016-5.414-3.586'
  + 'c-1.465-1.57-2.578-3.504-3.34-5.801C37.126,46.239,36.745,43.602,36.745,40.625z M61.425,40.485c0-3.797-'
  + '0.604-6.604-1.811-8.42c-1.207-1.816-3.064-2.724-5.572-2.724c-2.438,0-4.248,0.861-5.432,2.585c-1.184,1.72'
  + '2-1.775,4.388-1.775,7.998c0,3.89,0.609,6.767,1.828,8.631c1.219,1.862,3.105,2.794,5.66,2.794c2.414,0,4.201'
  + '-0.883,5.361-2.654C60.845,46.925,61.425,44.188,61.425,40.485z'

const p3 = 'M107.083,23.855c0.773-0.375,1.646-0.697,2.619-0.966c0.973-0.27,1.98-0.493,3.023-0.668'
  + 'c1.043-0.176,2.086-0.305,3.129-0.387c1.044-0.082,2.034-0.124,2.971-0.124c2.203,0,4.113,0.182,5.73,0.546'
  + 'c1.617,0.363,2.988,0.843,4.113,1.441c1.125,0.598,2.039,1.296,2.742,2.093c0.703,0.797,1.254,1.629,1.652,2.496'
  + 'c0.399,0.867,0.668,1.752,0.809,2.654c0.141,0.903,0.211,1.753,0.211,2.548v24.856h-8.332l-0.949-3.867'
  + 'c-1.125,1.454-2.561,2.579-4.307,3.375c-1.746,0.796-3.65,1.195-5.713,1.195c-1.477,0-2.859-0.228-4.148-0.686'
  + 's-2.402-1.131-3.34-2.021c-0.938-0.891-1.676-2.009-2.215-3.358c-0.539-1.347-0.809-2.901-0.809-4.657'
  + 'c0-2.414,0.539-4.36,1.618-5.837c1.078-1.476,2.525-2.618,4.341-3.427c1.817-0.808,3.92-1.359,6.311-1.651'
  + 'c2.391-0.294,4.887-0.462,7.488-0.511v-2.39c0-0.727-0.082-1.407-0.246-2.04c-0.164-0.633-0.48-1.184-0.949-1.653'
  + 'c-0.469-0.469-1.137-0.843-2.004-1.124c-0.867-0.282-2.016-0.422-3.445-0.422c-0.984,0-2.239,0.07-3.762,0.21'
  + 'c-1.524,0.141-3.34,0.446-5.449,0.914L107.083,23.855z M124.028,43.297c-1.359,0-2.596,0.048-3.709,0.141'
  + 'c-1.113,0.094-2.074,0.305-2.883,0.633c-0.808,0.328-1.435,0.797-1.88,1.406c-0.445,0.61-0.668,1.442-0.668,2.496'
  + 'c0,1.195,0.346,2.091,1.037,2.689c0.691,0.598,1.541,0.897,2.549,0.897c1.078,0,2.062-0.159,2.953-0.475'
  + 'c0.891-0.316,1.757-0.732,2.602-1.248V43.297z'

const p4 = 'M173.278,3.642V55.25c-1.055,0.515-2.197,1.002-3.428,1.458c-1.23,0.457-2.525,0.862-3.884,1.214'
  + 'c-1.359,0.351-2.766,0.626-4.219,0.825c-1.453,0.199-2.918,0.299-4.395,0.299c-5.437,0-9.556-1.529-12.357-4.588'
  + 'c-2.801-3.058-4.201-7.562-4.201-13.517c0-6.375,1.324-11.203,3.973-14.484c2.648-3.282,6.551-4.922,11.707-4.922'
  + 'c0.539,0,1.107,0.035,1.705,0.106c0.598,0.069,1.189,0.181,1.775,0.334c0.586,0.152,1.154,0.363,1.705,0.633'
  + 'c0.551,0.268,1.061,0.602,1.529,1.001V3.642H173.278z M163.188,30.605c-1.851-0.75-3.562-1.125-5.132-1.125'
  + 'c-2.273,0-3.99,0.885-5.15,2.655c-1.16,1.77-1.74,4.389-1.74,7.858c0,3.703,0.627,6.509,1.881,8.419'
  + 'c1.254,1.911,3.099,2.865,5.537,2.865c0.75,0,1.488-0.087,2.215-0.264c0.727-0.175,1.523-0.438,2.39-0.791V30.605z'

const p5 = 'M182.705,23.855c0.773-0.375,1.646-0.697,2.619-0.966c0.973-0.27,1.981-0.493,3.024-0.668'
  + 'c1.043-0.176,2.085-0.305,3.128-0.387c1.043-0.082,2.034-0.124,2.971-0.124c2.203,0,4.113,0.182,5.73,0.546'
  + 'c1.617,0.363,2.988,0.843,4.113,1.441c1.125,0.598,2.039,1.296,2.742,2.093c0.703,0.797,1.254,1.629,1.652,2.496'
  + 'c0.399,0.867,0.668,1.752,0.809,2.654c0.141,0.903,0.211,1.753,0.211,2.548v24.856h-8.332l-0.949-3.867'
  + 'c-1.125,1.454-2.561,2.579-4.307,3.375c-1.746,0.796-3.65,1.195-5.713,1.195c-1.477,0-2.859-0.228-4.148-0.686'
  + 'c-1.289-0.458-2.403-1.131-3.34-2.021c-0.938-0.891-1.676-2.009-2.215-3.358c-0.539-1.347-0.809-2.901-0.809-4.657'
  + 'c0-2.414,0.54-4.36,1.618-5.837c1.078-1.476,2.525-2.618,4.341-3.427c1.817-0.808,3.92-1.359,6.311-1.651'
  + 'c2.391-0.294,4.887-0.462,7.488-0.511v-2.39c0-0.727-0.082-1.407-0.246-2.04c-0.164-0.633-0.48-1.184-0.949-1.653'
  + 'c-0.469-0.469-1.137-0.843-2.004-1.124c-0.867-0.282-2.016-0.422-3.445-0.422c-0.985,0-2.238,0.07-3.762,0.21'
  + 'c-1.523,0.141-3.34,0.446-5.449,0.914L182.705,23.855z M199.65,43.297c-1.359,0-2.596,0.048-3.709,0.141'
  + 'c-1.113,0.094-2.074,0.305-2.883,0.633c-0.808,0.328-1.435,0.797-1.88,1.406c-0.445,0.61-0.668,1.442-0.668,2.496'
  + 'c0,1.195,0.345,2.091,1.037,2.689c0.691,0.598,1.541,0.897,2.549,0.897c1.078,0,2.062-0.159,2.953-0.475'
  + 'c0.89-0.316,1.758-0.732,2.602-1.248V43.297z'

const p6 = 'M215.273,11.927c2.711,0,4.917,2.206,4.917,4.917c0,2.711-2.206,4.917-4.917,4.917'
  + 's-4.917-2.206-4.917-4.917C210.356,14.132,212.562,11.927,215.273,11.927 M215.273,10.927c-3.268,0-5.917'
  + ',2.649-5.917,5.917c0,3.267,2.648,5.917,5.917,5.917c3.269,0,5.917-2.65,5.917-5.917C221.19,13.576,218.542,'
  + '10.927,215.273,10.927L215.273,10.927z'

const p7 = 'M216.238,19.687l-0.855-2.138c-0.242,0.016-0.509,0.016-0.798,0v2.138h-1.243v-5.738h1.747'
  + 'c0.376,0,0.701,0.036,0.974,0.104c0.275,0.069,0.501,0.175,0.682,0.318c0.18,0.143,0.313,0.324,0.4,0.542'
  + 'c0.087,0.219,0.131,0.478,0.131,0.777c0,0.36-0.063,0.672-0.19,0.937c-0.126,0.264-0.329,0.474-0.607,0.629l'
  + '1.149,2.429H216.238zM214.586,16.604c0.263,0.029,0.483,0.028,0.663-0.005s0.324-0.088,0.434-0.168c0.108-0.07'
  + '9,0.188-0.179,0.235-0.301c0.047-0.121,0.071-0.257,0.071-0.407c0-0.272-0.083-0.471-0.247-0.597c-0.165-0.126-0.'
  + '427-0.188-0.783-0.188h-0.373V16.604z'

class Logo extends PureComponent {
  render() {
    const { width, height, style } = this.props

    return (
      <svg
        version="1.1"
        x="0px"
        y="0px"
        width={width}
        height={height}
        style={style}
        viewBox="0 0 222.926 60.61"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              fill="#FFFFFF"
              d={p1}
            />
            <path
              fill="#FFFFFF"
              d={p2}
            />
            <path
              fill="#FFFFFF"
              d="M75.4,51.137h6.926V10.848H75.4V3.642h16.98v47.496h6.715v7.207H75.4V51.137z"
            />
            <path
              fill="#FFFFFF"
              d={p3}
            />
            <path
              fill="#FFFFFF"
              d={p4}
            />
            <path
              fill="#FFFFFF"
              d={p5}
            />
          </g>
        </g>
        <g>
          <path
            fill="#FFFFFF"
            d={p6}
          />
        </g>
        <g>
          <g>
            <path
              fill="#FFFFFF"
              d={p7}
            />
          </g>
        </g>
      </svg>
    )
  }
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object
}
Logo.defaultProps = {
  width: 74,
  height: 20
}

export default Logo
