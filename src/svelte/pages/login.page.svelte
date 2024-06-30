<script>
  import BaseLayout from "../layouts/base.layout.svelte";
  import TextInput from "../components/inputs/text.input.svelte";

  const LOGIN_PLACEHOLDER = "username".toUpperCase();
  const PASSWORD_PLACEHOLDER = "password".toUpperCase();
</script>

<BaseLayout>
  <div class="grid">
    <form method="POST" action="/login" class="login-form">
      <TextInput
        name="username"
        required={true}
        placeholder={LOGIN_PLACEHOLDER}
      />
      <TextInput
        name="password"
        required={true}
        placeholder={PASSWORD_PLACEHOLDER}
      />
    </form>
  </div>
</BaseLayout>
