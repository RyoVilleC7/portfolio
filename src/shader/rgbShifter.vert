varying vec2 vUv;

uniform float uFixAspect;
uniform float uMov;
uniform float uShift;

void main() {
  vUv = uv - .5;
  vUv.y *= uFixAspect;
  vUv += .5;

  vec3 pos = position;

  pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * uShift * 5.0) * 0.125);

  gl_Position = vec4( pos, 1.2 );
}