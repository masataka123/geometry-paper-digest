---
layout: paper
title: Combinatorial Bloch-Gieseker inequalities on toric surfaces
title_ja: トーリック曲面上のChern数を測る二つの面積
authors: Hunter Spink
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We give a combinatorial proof of the Bloch-Gieseker inequalities in the special case of ample toric vector bundles on toric surfaces via a new rearrangement inequality for planar curves. Using this we establish the Hodge package for combinatorial analogues of cohomology rings of ample projective bundles over toric surfaces which don't appear to arise from matroidal constructions.
topic: algebraic-geometry
tags:
- chern-classes
- positivity
- toric-geometry
arxiv_id: 2611.24692v1
arxiv_url: https://arxiv.org/abs/2611.24692
arxiv_submitted: '2026-11-18'
arxiv_updated: '2026-11-18'
summary: 滑らかなトーリック曲面上の豊富なトーリックベクトル束について、第二Chern数と第一Chern数の平方を折れ線の面積で表す。辺を方向順に並べ替えると面積が増すという不等式から、Bloch–Giesekerの正値性を導く。
abstract_en: We give a combinatorial proof of the Bloch-Gieseker inequalities in the special case of ample toric vector bundles on toric surfaces via a new rearrangement inequality for planar curves. Using this we establish the Hodge package for combinatorial analogues of cohomology rings of ample projective bundles over toric surfaces which don't appear to arise from matroidal constructions.
summary_en: ''
abstract_ja: 束の固定点での重みと不変曲線に沿った対応から平面の閉折れ線を作る。曲線の巻き数を用いた符号付き面積と辺の並べ替えが定める凸多角形の面積の間に、代数幾何に由来しない組合せデータにも成立する不等式を与える。
abstract_source_url: https://arxiv.org/abs/2611.24692
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.24692v1](https://arxiv.org/abs/2611.24692)
- **著者:** Hunter Spink
- **初回投稿日:** 2026-11-18
- **最終更新日:** 2026-11-18
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

豊富な階数二以上の束では、第二Chern数が正であり、第一Chern類の自己交差数より小さい。著者はトーリック曲面上で、この二つの不等式を一つの平面幾何の問題として説明する。

固定点の重みを不変曲線に沿ってつなぐと閉折れ線の集まりになる。自己交差もあり得るので、囲まれた領域を単純に足す代わりに巻き数で重み付けする。

同じ辺を反時計回りの方向順につなぎ直すと、一つの凸多角形ができる。こちらの面積は元の符号付き面積の絶対値より厳密に大きく、この差にChern数の正値性が現れる。

## 背景と問題設定

多角形の各頂点に階数と同じ個数の重みを置き、各辺の両端の重みを対応させる。対応する差が辺と同じ向きの正の倍数であることが、このデータの豊富性に当たる。重みが重複してつなぎ方が一意でなくても、二種類の面積は変わらない。

## 主結果

### Chern数の面積表示（Theorem 1.3）

滑らかなトーリック曲面上の豊富なトーリック束 $V$ の階数を二以上とする。符号付き面積を $A\_{\rm sgn}$、並べ替えた多角形の面積を $A\_{\rm ord}$ とすると、

$$
\deg(c\_1(V)^2)-2\deg(c\_2(V))=2A\_{\rm sgn},\qquad \deg(c\_1(V)^2)=2A\_{\rm ord}
$$

となる。したがって $0<\deg(c\_2(V))<\deg(c\_1(V)^2)$ は $A\_{\rm ord}>|A\_{\rm sgn}|$ と同値である。

### 辺の並べ替え不等式（Theorem 1.4）

この面積不等式は階数二以上の任意の豊富な平面の骨格データで成立する。二つの凸多角形の境界から始める場合、並べ替えはMinkowski和を与え、混合面積の正値性を含む。著者はさらに射影束のコホモロジー環を模した環にHodge型の性質を導く。高次元で対応するSchur類が正となるという一般化はConjecture 1.8である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.24692)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.24692v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.3, 1.4; Conjecture 1.8
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.24692v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
