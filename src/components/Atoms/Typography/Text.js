import React from "react"
import "./typography.css"
/**
 * Primary UI component for user interaction
 */
export const Text = () => {
  return (
    <div className="typography-wrapper">
      <div className="typography-group headings-group">
        <h1>h1 - Heading Level 1 Acier BAT Text Gris</h1>
        <h2>h2 - Heading Level 2 Acier BAT Text Solid</h2>
        <h3>h3 - Heading Level 3 Acier BAT Text Solid</h3>
        <h4>h4 - Heading Level 4 Acier BAT Text Solid</h4>
        <h5>h5 - Heading Level 5 Acier BAT Text Solid</h5>
      </div>

      <div className="typography-group paragraphs">
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada
          bibendum arcu vitae elementum curabitur vitae. Posuere morbi leo urna
          molestie.
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae
          elementum curabitur vitae. Eget nullam non nisi est sit amet facilisis
          magna. Blandit massa enim nec dui nunc mattis enim ut tellus. Volutpat
          blandit aliquam etiam erat velit. Nunc faucibus a pellentesque sit
          amet porttitor. Nisl suscipit adipiscing bibendum est ultricies
          integer. Malesuada bibendum arcu vitae elementum curabitur vitae.
          Posuere morbi leo urna molestie. Dapibus ultrices in iaculis nunc sed
          augue lacus viverra vitae. Sed enim ut sem viverra aliquet eget sit
          amet tellus. Neque volutpat ac tincidunt vitae semper quis lectus
          nulla at. Orci ac auctor augue mauris. Orci dapibus ultrices in
          iaculis nunc sed augue lacus viverra. Egestas dui id ornare arcu odio
          ut sem. Volutpat consequat mauris nunc congue nisi vitae suscipit
          tellus. Iaculis nunc sed augue lacus viverra vitae congue eu
          consequat. Mi sit amet mauris commodo quis. Aliquet porttitor lacus
          luctus accumsan tortor posuere ac ut. Id volutpat lacus laoreet non
          curabitur gravida.
        </p>
      </div>
    </div>
  )
}
