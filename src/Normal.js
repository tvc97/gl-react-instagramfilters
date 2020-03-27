import { Shaders, Node, GLSL } from 'gl-react';
import React from 'react';

const shaders = Shaders.create({
  Normal: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;

      uniform sampler2D inputImageTexture;

      void main () {

        vec3 texel = texture2D(inputImageTexture, uv).rgb;
        gl_FragColor = vec4(texel, 1.0);
      }`
  }
});

export default ({ children: inputImageTexture }) => {
  return (
    <Node
      shader={shaders.Normal}
      uniforms={{
        inputImageTexture
      }}
    />
  );
};
