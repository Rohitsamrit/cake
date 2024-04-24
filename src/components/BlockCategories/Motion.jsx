import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

export const Motion = `
   <category name="Cake Baking" colour="#ff6347">
    <block type="add_ingredient"></block>
    <block type="mix_ingredients"></block>
    <block type="bake_cake"></block>
    <block type="get_mix"></block>
    <block type="reset_cake"></block>
  </category>
`;

// Block Injection
Blockly.Blocks["add_ingredient"] = {
  init: function () {
    this.appendDummyInput().appendField("Add Ingredient");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  },
};

Blockly.Blocks["mix_ingredients"] = {
  init: function () {
    this.appendDummyInput().appendField("Mix Ingredients");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  },
};

Blockly.Blocks["bake_cake"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Bake Cake for")
      .appendField(new Blockly.FieldNumber(30), "MINUTES")
      .appendField("minutes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  },
};

Blockly.Blocks["get_mix"] = {
  init: function () {
    this.appendDummyInput().appendField("Get Mix");
    this.setOutput(true, "String");
    this.setColour(290);
  },
};

Blockly.Blocks["reset_cake"] = {
  init: function () {
    this.appendDummyInput().appendField("Reset Cake");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  },
};

// Block functions
// JavaScript code generator for 'add_ingredient' block
javascriptGenerator["add_ingredient"] = function (block) {
  const code = `addIngredient`;
  console.log(code);
  return code;
};

// JavaScript code generator for 'mix_ingredients' block
javascriptGenerator["mix_ingredients"] = function (block) {
  const code = `mixIngredients`;
  console.log(code);
  return code;
};

// JavaScript code generator for 'bake_cake' block
javascriptGenerator["bake_cake"] = function (block) {
  const minutes = block.getFieldValue("MINUTES");
  const code = `bakeCake;
`;
  console.log(code);
  return code;
};

// JavaScript code generator for 'get_mix' block
javascriptGenerator["get_mix"] = function (block) {
  const code = `getMix;
`;
  console.log(code);
  return code;
};

// JavaScript code generator for 'reset_cake' block
javascriptGenerator["reset_cake"] = function (block) {
  const code = `resetCake;
`;
  console.log(code);
  return code;
};
