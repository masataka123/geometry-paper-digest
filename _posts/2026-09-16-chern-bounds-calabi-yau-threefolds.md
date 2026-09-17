---
layout: paper
title: "Chern bounds and tangent geometry of polarized Calabi-Yau threefolds"
title_ja: "偏極Calabi–Yau三次元多様体のChern数境界と接空間幾何"
authors: "Atsushi Kanazawa"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - hep-th
  - math.CV
arxiv_abstract: >-
  We bring new insights into the numerical geography of polarized Calabi-Yau threefolds through the first jet bundle, tangent geometry and projective duality. Let $X$ be a Calabi-Yau threefold with a very ample polarization $H$. We use mixed intersections on the projectivized dual of the first jet bundle to prove a quadratic inequality relating the degree $d=H^3$ and Chern numbers. Combining this inequality with hyperplane-section and tangent-variety estimates yields improved uniform bounds $-4d-80\le h^{1,1}(X)-h^{2,1}(X)\le\frac{173}{66}d$. For nondegenerate embeddings in $\mathbb{P}^6$, we improve the upper bound on the degree from $41$ to $39$ and express the tangent degree as a quadratic polynomial in $d$. We also prove that, for every $m\ge2$, the tangent-incidence morphism associated with $|mH|$ is the normalization morphism of the tangent variety. For $m=1$, we conjecture tangent degree $1$ for complete embeddings in $\mathbb{P}^N$ with $N\ge7$ and verify this for several families, including general intersections of four quadrics and general GPK$^3$ threefolds.
topic: algebraic-geometry
tags:
  - chern-classes
  - calabi-yau-geometry
  - positivity
arxiv_id: "2609.17513v1"
arxiv_url: "https://arxiv.org/abs/2609.17513"
arxiv_submitted: "2026-09-15"
arxiv_updated: "2026-09-15"
summary: >-
  非常に豊富な偏極をもつCalabi–Yau三次元多様体について、第一ジェット束と接多様体からChern数・Hodge数の新しい一様境界を導く。特に $h^{1,1}-h^{2,1}$ の上下界を改善し、$\mathbb P^6$ 内では次数を39以下に絞るとともに、多重偏極の接入射写像が接多様体の正規化を与えることを示す。
abstract_en: >-
  We bring new insights into the numerical geography of polarized Calabi-Yau threefolds through the first jet bundle, tangent geometry and projective duality. Let $X$ be a Calabi-Yau threefold with a very ample polarization $H$. We use mixed intersections on the projectivized dual of the first jet bundle to prove a quadratic inequality relating the degree $d=H^3$ and Chern numbers. Combining this inequality with hyperplane-section and tangent-variety estimates yields improved uniform bounds $-4d-80\le h^{1,1}(X)-h^{2,1}(X)\le\frac{173}{66}d$. For nondegenerate embeddings in $\mathbb{P}^6$, we improve the upper bound on the degree from $41$ to $39$ and express the tangent degree as a quadratic polynomial in $d$. We also prove that, for every $m\ge2$, the tangent-incidence morphism associated with $|mH|$ is the normalization morphism of the tangent variety. For $m=1$, we conjecture tangent degree $1$ for complete embeddings in $\mathbb{P}^N$ with $N\ge7$ and verify this for several families, including general intersections of four quadrics and general GPK$^3$ threefolds.
summary_en: ""
abstract_ja: >-
  非常に豊富な偏極 $H$ を備えたCalabi–Yau三次元多様体の数値的地理を、第一ジェット束、接多様体、射影双対性によって研究する。次数 $d=H^3$ とChern数を結ぶ二次不等式からHodge数差の境界を改善し、$\mathbb P^6$ への非退化埋込みでは $d\le39$ を得る。さらに $m\ge2$ では $|mH|$ に付随する接入射写像が接多様体の正規化写像であることを示す。
abstract_source_url: "https://arxiv.org/abs/2609.17513"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.17513](https://arxiv.org/abs/2609.17513)
- **著者:** Atsushi Kanazawa
- **初回投稿日・最終更新日:** 2026年9月15日
- **主分類・副分類:** math.AG（主分類）, hep-th, math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

非常に豊富な因子 $H$ をもつ滑らかなCalabi–Yau三次元多様体 $X$ に対し、次数 $d=H^3$、$c=c_2(X)\cdot H$、$e=c_3(X)$ の可能領域を調べる論文である。$e=2(h^{1,1}-h^{2,1})$ なので、Chern数の評価はHodge数差を直接制御する。

第一ジェット束の射影化上で混合交叉数にKhovanskii–Teissier不等式を適用し、従来のSchur類による評価を強める。接多様体の次数と接次数を組み合わせ、Hodge数差の既知の線形境界も大幅に改善する。

もう一つの柱は接入射写像の幾何である。$m\ge2$ に対する完全線形系 $|mH|$ では、この写像が接多様体の正規化写像になる。$m=1$ の安定範囲については接次数1を予想し、四つの二次超曲面の一般完全交叉などで検証する。

## 背景と問題設定

$J^1(H)$ を $\mathcal O_X(H)$ の第一ジェット束とし、$\mathbb P(J^1(H)^*)$ から接多様体 $\operatorname{Tan}(X)$ への写像の次数を $\tau_{\rm tan}(X)$ と置く。Introductionが強調する基本分解は

$$
20d-6c-e=\tau_{\rm tan}(X)\deg\operatorname{Tan}(X)\qquad (N\ge6)
$$

である。左辺のChern数の組合せを射影幾何の正の量として解釈することが、新しい評価の出発点となる。

## 主結果

### Chern数・Hodge数境界（Theorems 5.2, 5.6）

混合交叉不等式から

$$
e\ge -5d-c-\frac{c^2}{4d}
$$

を得る。これと超平面切断・接多様体の評価を統合すると

$$
-4d-80\le h^{1,1}(X)-h^{2,1}(X)\le\frac{173}{66}d
$$

となる。下側の等号は五次三次元超曲面を特徴づける一方、上側係数の幾何的達成可能性は未解決である。

### $\mathbb P^6$ における次数（Theorems 3.1, 5.12）

非退化な $X\subset\mathbb P^6$ では

$$
c=84-2d,\qquad e=49d-588-d^2,\qquad
\tau_{\rm tan}(X)=d^2-17d+84
$$

が成り立ち、$12\le d\le39$ を得る。従来の上界41を2だけ改善する結果である。

### 多重偏極の接双有理性（Theorem 7.1）

任意の滑らかな非線形射影多様体に対し、$m\ge2$ なら $|mH|$ の接入射写像は接多様体の正規化写像となる。$m\ge3$ では全単射であり、埋め込まれた $X$ の外では同型になる。

## 証明の見取り図

第一ジェット束の大域生成性からSchur類の非負性を取り出し、さらにその射影化上の二つのnef類へKhovanskii–Teissier不等式を適用する。上界側では接多様体・割線多様体の次数評価と、極小の値が有理性を強制するという排除論法を使う。正規化定理ではVeronese部分線形系で接空間を分離し、その性質を完全線形系へ移す。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.17513](https://arxiv.org/abs/2609.17513)
- **Introduction:** Section 1, pp. 1–3
- **主要結果:** Theorems 3.1, 5.2, 5.6, 5.12, 7.1
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
