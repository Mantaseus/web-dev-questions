import beautify, { JSBeautifyOptions } from 'js-beautify';

export interface Props {
  func: Function;
}

const options: JSBeautifyOptions = {
  indent_size: 4,
  indent_char: " ",
  max_preserve_newlines: 5,
  preserve_newlines: true,
  keep_array_indentation: false,
  break_chained_methods: true,
  brace_style: "collapse",
  space_before_conditional: true,
  unescape_strings: false,
  jslint_happy: false,
  end_with_newline: false,
  wrap_line_length: 0,
  comma_first: false,
  e4x: false,
  indent_empty_lines: false,
};

export const IdealSolution: React.FC<Props> = ({ func }) =>
  (<div className="ideal-solution-container">
    <details>
      <summary><strong>Ideal Solution</strong></summary>
      <pre>
        {beautify.js(func.toString(), options)}
      </pre>
    </details>
  </div>);
