varying vec2 vUv;

uniform float uShift;
uniform sampler2D uTex;

void main() {
  float shift = uShift * 0.05;

  float r = texture2D( uTex, vUv + vec2( shift, 0.0 ) ).r;
  float g = texture2D( uTex, vUv ).g;
  float b = texture2D( uTex, vUv - vec2( shift, 0.0 ) ).b;

  vec3 color = vec3( r, g, b );

  gl_FragColor = vec4( color, 1.0 );
}