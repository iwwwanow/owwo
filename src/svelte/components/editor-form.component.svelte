<script>
  export let client;

  const { isEditor } = client;
</script>

<div class="grid editor-form">
  <h5>title</h5>
  <h5>description</h5>
  <h5>cover-input</h5>

  <span>
    <h5>files-list_file-input-list</h5>
    <h6>- чем отличается этот импут от следующего?</h6>
    <h6>- что попадает в элементы?</h6>
    <h6>
      -- если в файлах есть index.html, то мы рендерим его в iframe в варианте
      extended
    </h6>
    <h6>
      - во всех остальных случаях мы рендерим каждый файл как отдельный элемент
      в сетке?
    </h6>
    <h6>- элементы в сетке разделить на *node-files* и *child-nodes*</h6>
    <h6>
      - как должны именоваться файлы, которые будут чепляться за страницу?
      стилии скрипты
    </h6>
    <h6>
      - все файлы с расширением .css и .script - добавляются И на страницу И в
      сетку нод
    </h6>
    <h6>
      - по дефолту они попадают в общую базу, можно скрыть знаком приватности
      (#/_)
    </h6>
  </span>

  <span>
    <h5>content-big-input</h5>
  </span>

  <span>
    <h5>node-meta-input_parents-siblings-childs</h5>
    <h6>root parents in placeholder input color??</h6>
  </span>
</div>
