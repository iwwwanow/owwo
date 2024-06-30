<script>
  export let id;
  export let name;
  export let type = "text";
  export let required = false;
  export let placeholder = "";
</script>

<p class="text-input">
  <input
    class="text-input__input"
    autocomplete="off"
    autocapitalize="off"
    {required}
    {id}
    {name}
    {placeholder}
    {type}
  />
</p>

<style>
  .text-input__input {
    width: 100%;
    padding: 8px 4px;

    color: var(--DARK);
    background-color: var(--LIGHT);

    font-style: inherit;
    font-weight: inherit;
    text-transform: inherit;
  }

  .text-input__input:focus {
    color: var(--black);
    background-color: var(--WHITE);
    outline: 1px solid var(--BLACK);
    border: none;
  }

  .text-input__input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--MEDIUM);
    opacity: 1;
    /* Firefox */
  }

  .text-input__input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--MEDIUM);
  }

  .text-input__input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--MEDIUM);
  }
  @media screen and (max-width: 444px) {
    .text-input__input {
      border-radius: 4px;
    }
  }
</style>
