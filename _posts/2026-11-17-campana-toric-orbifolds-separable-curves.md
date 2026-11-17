---
layout: paper
title: Campana separable rational connectedness of toric orbifold
title_ja: toric orbifoldの分離的Campana有理連結性
authors: Enhao Feng, Sara Mehidi
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Campana introduced a notion of Campana rational connectedness for Campana orbifolds and conjectured that certain Fano orbifolds are Campana rationally connected. In this paper, we study a version of this conjecture in positive characteristic and verify a stronger statement for some toric orbifolds. We also provide examples illustrating the relation between the failure of separable Campana rational connectedness and singularities.
topic: algebraic-geometry
tags:
- toric-geometry
- positive-characteristic
- singularities
arxiv_id: 2511.22545v2
arxiv_url: https://arxiv.org/abs/2511.22545
arxiv_submitted: '2025-11-27'
arxiv_updated: '2026-11-15'
summary: 境界への接触条件を課した有理曲線でtoric orbifoldを連結できるかを正標数で調べる。係数1の境界も許すnon-kltの場合に、fanの滑らかさや特異点の条件から分離的Campana有理連結性を導き、重み付き射影空間で失敗する例も示す。
abstract_en: ''
summary_en: Boundary multiplicities restrict which rational curves are allowed in Campana geometry. This paper studies whether sufficiently deformable families of these curves exist on toric orbifolds in positive characteristic. Smoothness conditions on the fan provide positive results even with integral boundary components. Weighted projective spaces also reveal an obstruction caused by the characteristic dividing a weight.
abstract_ja: 本論文はCampana orbifold上の有理曲線を正標数で研究する。有限の境界重複度だけでなく係数1の境界も許し、toricな設定で分離的Campana有理連結性の十分条件を与える。fanの滑らかな最大錐とその隣接錐、曲面におけるtameな特異点が条件に現れる。一方、標数が重みを割る重み付き射影空間では、この分離的性質が成立しない場合を示す。
abstract_source_url: https://arxiv.org/abs/2511.22545
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2511.22545v2](https://arxiv.org/abs/2511.22545)
- **著者:** Enhao Feng, Sara Mehidi
- **初回投稿日:** 2025-11-27
- **最終更新日:** 2026-11-15
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

通常の有理連結性では一般の2点を有理曲線で結ぶ。境界を伴う幾何では、その曲線が境界にどう接するかも制約する必要がある。Campana orbifoldは境界の重複度を記録してこの問題を定式化する。

本論文はtoric orbifoldを正標数で扱い、曲線の族が良い変形性を持つ分離的Campana有理連結性を調べる。特に、境界に係数1の成分を含むnon-kltな場合まで許す点に特色がある。

fanの適切な滑らかさのもとで分離的な連結性を証明する一方、標数と特異点の関係による失敗例も示す。したがって、標数0のFano orbifoldに関するCampana予想を、仮定を変えず正標数全般へ拡張する主張ではない。

## 背景と問題設定

境界は

$$
\Delta\_\epsilon=\sum\_i\left(1-\frac1{m\_i}\right)\Delta\_i,
\qquad m\_i\in\mathbb N\_{>0}\cup\lbrace \infty\rbrace
$$

と書かれ、orbifold標準因子は $K\_X+\Delta\_\epsilon$ である。Campana曲線は、境界に対する接触次数がこれらの重複度と整合する有理曲線である。$m\_i=\infty$ は係数1の境界を表す。

IntroductionのConjecture 1.2は、標数0のklt Fano orbifoldのCampana有理連結性に関する背景の予想である。本論文の定理はtoricな設定で、non-klt境界や正標数を含む具体的条件を扱う。

## 主結果

### 滑らかな錐の周囲からの十分条件（Theorem 1.3）

代数閉体 $k$ の標数を $p\ge\dim X$ とする。Campana toric orbifold $(X,\Delta\_\epsilon)$ のfanに滑らかな最大錐が存在し、そのすべての隣接錐も滑らかであれば、$(X,\Delta\_\epsilon)$ は分離的Campana有理連結である。

kltの場合は先行研究でより広い標数範囲の結果があり、本定理はnon-klt境界へ進むものと位置付けられる。高次元では標数と次元の条件を外すと失敗し得るとIntroductionは注意する。証明は標数0でも働くと述べられる。

### toric曲面の十分条件（Theorem 1.4）

標数 $p>0$ のnon-klt Campana toric曲面で、fanの各rayに対し、そのrayと隣接しない滑らかな錐またはtamely singularな錐が存在すると仮定する。このとき分離的Campana有理連結性が成立する。

ここでtame特異点という条件は定理の一部であり、単に「任意のtoric特異点でよい」とはしない。Introductionに精密な局所定義が示されないため、それを推測して補わない。

### 重み付き射影空間の障害（Theorem 1.5）

$X=\mathbb P(q\_0,\ldots,q\_n)$ とし、$(X,\Delta)$ がnon-klt Campana toric orbifoldで、$\Delta$ のすべての成分の係数が1とする。ある重み $q\_j$ が

$$
p\mid q\_j
$$

を満たせば、$(X,\Delta)$ は分離的Campana有理連結ではない。境界条件と重みの標数依存性を合わせて見る必要があることを示す負の結果である。

## 証明の見取り図

対数幾何により、境界に対する接触次数を写像の構造そのものに組み込む。Campana曲線の族をstable log mapのモジュライの中で扱うことで、接触条件を保った変形を研究する。toricな設定ではfanの組合せデータがこの議論を具体化する。Introductionはこの枠組みと先行研究との関係を説明するが、後続節の個々の変形計算は本記事の確認範囲には含めない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2511.22545)
- **Introduction:** [PDF](https://arxiv.org/pdf/2511.22545v2) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.3–1.5（Conjecture 1.2は背景の予想）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2511.22545v2
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source\_scope:** Abstract and Introduction
