<?php
// PHP trap zone: nothing here is inside a tag
$layout = 'trap-var';
$visual = "visual=bg:trap";
if ($a < $b) { $space = 'trap-compare'; }
function layout($x) { return $x; }
?>
<!DOCTYPE html>
<!-- <div layout="trap-comment"> -->
<div layout="flex col" space="p:medium" visual="bg:white">
  <nav layout="<?= $open ? 'flex row' : 'grid' ?>" space=<?= $compact ? 'p:small' : 'p:big' ?>></nav>
  <aside visual="rounded:medium <?php echo $dark ? 'bg:black' : 'bg:light'; ?> shadow-<?= $level ?>"></aside>
  <span visual="<?= 'text-' . $tone . ' text:big' ?>"></span>
  <div <?php if ($wrap): ?>layout="wrap"<?php endif; ?> data-layout="trap-data"></div>
  <?php if ($show): ?>
    <section layout="center" visual="bg:info"><?= htmlspecialchars($text) ?></section>
  <?php else: ?>
    <section layout="around"></section>
  <?php endif; ?>
  <?php foreach ($items as $item): ?>
    <p visual="text:muted"><?= $item ?> space = big</p>
  <?php endforeach; ?>
  <?php echo '<footer layout="between" visual="bg:dark">'; ?>
</div>
