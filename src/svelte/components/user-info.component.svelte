<script>
  import Avatar from "../components/avatar.component.svelte";
  import Hr from "./hr.component.svelte";

  export let user;
</script>

<a href={user.username} class="user-info__container {user.type}">
  <Avatar {user} size="w16" />
  <h5 style="word-break: break-all" class="user-info__username">
    {user.username}
  </h5>
</a>

<style>
  .user-info__container {
    display: flex;
    gap: calc(var(--gap-grid) / 8);
    text-decoration-color: var(--color);
  }
  .user-info__container:hover {
    opacity: 0.8;
  }
  .user-info__username {
    color: var(--color);
  }
  .owner {
    --color: var(--black);
  }
  .editor {
    --color: var(--dark);
  }
  .pusher {
    --color: var(--medium);
  }
  .viewer {
    --color: var(--light);
  }
</style>
