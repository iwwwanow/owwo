<script>
  import ElementLayout from "../layouts/element.layout.svelte";
  import UserInfo from "../components/user-info.component.svelte";
  import Date from "../components/date.component.svelte";
  import Text from "../components/text.component.svelte";
  import Hr from "../components/hr.component.svelte";

  export let element;
</script>

<ElementLayout>
  <div class="element-content">
    <h1>{element.title}</h1>
  </div>

  <div class="grid">
    <h4>
      TODO если элементы со страницы кончились, предлагать перейти на следующую
      страницу
    </h4>
    <h4>
      TODO ДЕЛАЙ ФИКСИРОВАННУЮ ШИРИНУ КАРТОЧЕК. Это сильно упростит верстку,
      потом ты сможешь с ней побаловаться
    </h4>
  </div>

  <div class="grid element-info__data-wrapper">
    <div class="element-info__data-container">
      {#if element.title}
        <h2 class="element-info__title">{element.title}</h2>
      {/if}
      <UserInfo user={element.user} />
      <Date date={element.date} />
      <Hr />
      {#if element.pages}{/if}
    </div>
    <div class="element-info__pages-container">
      <h5>other pages - column with wrap</h5>
    </div>
  </div>

  <div class="grid element__text-container">
    TODO 3 column width
    {#if element.text}
      <!-- TODO пересмотри этот момент. страница выглядит сильно пустой без описания -->
      <Text text={element.text} className="element__text" />
    {/if}
  </div>

  <div class="grid">
    <h5>BACK ASCII ICON</h5>
    <h5>PREV-ELEMENT-COVER</h5>
    <h5>ОПИСАНИЕ "ЭЛЕМЕНТА"</h5>
    <h5>СЛЕДУЮЩИЙ ЭЛЕМЕНТ</h5>
    <h5>NEXT-ELEMENT-COVER</h5>
    <h5>NEXT ASCII ICON</h5>
  </div>

  <div class="grid">
    <h5>TODO Зависит от количества колонок в сетке (от разрешения)</h5>
    <h5>TODO одна строчка</h5>
    <h5>RANDOM USER ELEMENTS</h5>
  </div>

  <div class="grid">
    <h5>OWWO RANDOM ELEMENT CARDS</h5>
  </div>
</ElementLayout>

<style>
  .element-content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
