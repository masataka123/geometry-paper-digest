---
layout: paper
title: Kähler metrics with varying cone angles and Ricci curvature
title_ja: Ricci曲率の二乗可積分性による円錐角の剛性
authors: Martin de Borbon
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We prove that the cone angle of a Kähler metric is constant if its Ricci curvature is locally in $L^2$. In particular, a Kähler--Einstein metric cannot have a varying cone angle. The proof is elementary and assumes only uniform comparison with the corresponding model.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- curvature
arxiv_id: 2611.22603v1
arxiv_url: https://arxiv.org/abs/2611.22603
arxiv_submitted: '2026-11-17'
arxiv_updated: '2026-11-17'
summary: 因子に沿って角度の変化を許す円錐モデルと一様比較可能なKähler計量を考える。Ricci曲率が局所二乗可積分なら角度は一定になり、特にKähler–Einstein計量でこの種の角度変化は起こらない。
abstract_en: ''
summary_en: The transverse geometry of a divisor is encoded by a cone parameter that can initially depend on position. The paper identifies a curvature integrability threshold that forces this parameter to be locally constant. Explicit local potentials demonstrate sharpness of the threshold.
abstract_ja: 円錐角の剛性を得るために、計量の高階漸近展開は必要ない。局所モデルとの両側評価とRicci曲率の有限エネルギーがあれば十分であり、指数2を下げると角度が変化する例が存在する。
abstract_source_url: https://arxiv.org/abs/2611.22603
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.22603v1](https://arxiv.org/abs/2611.22603)
- **著者:** Martin de Borbon
- **初回投稿日:** 2026-11-17
- **最終更新日:** 2026-11-17
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

円錐計量の特異性は、因子に垂直な複素円板で測る角度によって記述される。AtiyahとLeBrunは、Einstein計量の角度が余次元二の部分多様体に沿って変化し得るかを問うた。

著者はKählerの場合、局所モデルとの一様比較だけでこの問いに否定的に答える。Einstein方程式より弱いRicci曲率の積分条件が剛性を与える。

その積分条件の指数は鋭い。角度が変化しながら指数2未満のすべての積分条件を満たす例があり、スカラー曲率の有界性だけから同じ結論は引き出せない。

## 背景と問題設定

穿孔円板の座標を $z$、因子方向の単位球の座標を $w$、正の滑らかな角度関数を $\beta(w)$ とする。各横断円板における角度は $2\pi\beta(w)$ である。

## 主結果

### 円錐角の一定性（Theorem 1）

複素次元 $n\ge2$ でモデルを

$$
g\_\beta=|z|^{2\beta(w)-2}|dz|^2+\sum\_{j=1}^{n-1}|dw\_j|^2
$$

とする。$C\_0^{-1}g\_\beta\le g\le C\_0g\_\beta$ を満たすKähler計量に対して

$$
\int\_{\Delta^\ast \times B}|\operatorname{Ric}(g)|\_g^2\thinspace dV\_g<\infty
\quad\Longrightarrow\quad \beta\text{ は一定}
$$

が成り立つ。比較は二次形式の大小であり、計量係数の微分の比較を仮定しない。

### 連結な因子と指数の鋭さ（Corollary 2, Remark 4）

滑らかな連結因子の各点に上の比較が成立する座標があり、その近傍でRicci曲率のノルムが有界なら、角度は因子全体で一定である。モデルの局所体積が有限なので有界性から定理の積分条件が従う。特にKähler–Einstein計量に適用できる。

一方、$|w|^2+|z|^{2\beta(w)}$ を局所ポテンシャルとする例では、角度が変化してもRicci曲率は各 $p<2$ に対し局所 $L^p$ に属する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.22603)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.22603v1) — §1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1, Corollary 2, Remarks 3–4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.22603v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
