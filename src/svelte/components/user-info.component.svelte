<script>
  import Avatar from "../components/avatar.component.svelte";
  import Hr from "./hr.component.svelte";

  export let type;
  export let user;
</script>

<a href={user.username} class="user-info__container">
  <Avatar {user} type="blob" />
  {#if type !== "avatar"}
    <h5 style="word-break: break-all" class="user-info__username {user.type}">
      {user.username}
    </h5>
  {/if}
</a>

<style>
  .user-info__container {
    display: flex;
    gap: var(--gap-v);
  }
  .user-info__container:hover {
    opacity: 0.8;
  }
  .user-info__username {
    color: var(--color);
    text-decoration-color: var(--color);
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
