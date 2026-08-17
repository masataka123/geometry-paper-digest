---
layout: paper
title: "The Fino-Vezzoni conjecture on balanced Bismut torsion-parallel manifolds"
title_ja: "balanced Bismut torsion-parallel多様体上のFino–Vezzoni予想"
authors: "Shuwen Chen, Fangyang Zheng"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We study the Fino-Vezzoni conjecture on compact complex manifolds carrying a balanced Bismut
  torsion-parallel Hermitian metric. We prove that if such a manifold also admits a pluriclosed
  Hermitian metric, then it admits a Kähler metric.
topic: differential-geometry
tags:
  - curvature
arxiv_id: "2608.13887v1"
arxiv_url: "https://arxiv.org/abs/2608.13887"
arxiv_submitted: "2026-08-14"
arxiv_updated: "2026-08-14"
summary: >-
  compact複素多様体がbalanced Bismut torsion-parallel Hermitian計量と、別のpluriclosed Hermitian計量を持つならKähler計量を持つことを証明する。
  これにより、BTPという曲率・捩率条件の下でFino–Vezzoni予想を全複素次元について解決する。
abstract_en: ""
summary_en: >-
  The authors verify the Fino–Vezzoni conjecture for compact complex manifolds carrying a balanced Hermitian metric whose Bismut torsion is parallel. If the same manifold also supports a pluriclosed Hermitian metric, possibly a different one, they construct a Kähler metric. Their argument works in every complex dimension and uses Bismut holonomy, parallel Hermitian derivations, and a finite-dimensional determinant maximization rather than a homogeneity assumption.
abstract_ja: >-
  balancedでBismut接続の捩率が平行なHermitian計量を持つcompact複素多様体を扱う。同じ多様体がさらにpluriclosed Hermitian計量を持つなら、二つの計量が同一であるとの仮定なしにKähler計量が存在することを示し、このクラスでFino–Vezzoni予想を証明する。
abstract_source_url: "https://arxiv.org/abs/2608.13887"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.13887](https://arxiv.org/abs/2608.13887)
- **著者:** Shuwen Chen, Fangyang Zheng
- **初回投稿日:** 2026年8月14日
- **最終更新日:** 2026年8月14日（v1）
- **主分類・副分類:** math.DG（主分類。副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非Kähler Hermitian幾何で頻出する二条件が balanced と pluriclosed である。Fino–Vezzoni予想は、compact複素多様体がそれぞれの条件を満たすHermitian計量を持つならKähler計量を持つ、と主張する。二つの計量は同じである必要がないため、単一計量が両条件を満たせば直ちにKählerとなる既知の事実より強い問題である。

本論文はbalanced計量に、Bismut接続の捩率が平行というBTP条件を課す。この条件下で、別のpluriclosed計量が存在すればKähler計量を構成できることを全複素次元で証明する。

既知の3次元分類に依存せず、Bismut holonomy が保存する有限次元データと行列式最大化を用いるため、推移的群作用のない多様体にも適用できる点が特徴である。

## 背景と問題設定

Hermitian多様体 $(M^n,g)$ の基本形式を $\omega$ とする。balanced条件とpluriclosed条件はそれぞれ

$$
d(\omega^{n-1})=0,\qquad \partial\bar\partial\omega=0
$$

である。balanced性はGauduchon torsion 1-form $\eta$ を

$$
\partial(\omega^{n-1})=-\eta\wedge\omega^{n-1}
$$

で定めたときの $\eta=0$ と同値である。またBTPとはBismut接続 $\nabla^b$ とその捩率 $T^b$ に対する $\nabla^bT^b=0$ をいう。

## 主結果

### 主定理（Theorem 1）

$M^n$ をcompact複素多様体とする。$M$ がbalanced BTP Hermitian計量 $g$ とpluriclosed Hermitian計量 $h$ を持つなら、$M$ はKähler計量を持つ。

重要なのは $g$ と $h$ が異なってよいことである。この定理により、compact balanced BTP多様体上ではFino–Vezzoni予想が任意の複素次元で成立する。

## 証明の見取り図

Chern捩率のBismut平行性により、各点で複素Lie括弧が生じ、Bismut平行移動で保存される。平行な $(1,0)$-ベクトル場から、trace-freeな平行Hermitian derivationと閉実 $(1,1)$-形式を作る。

一方、pluriclosed計量をBismut holonomyで平均し、正の平行Hermitian endomorphism $K$ を得る。閉平行変分からなる有限次元アフィン空間上で $\log\det$ を最大化すると、最大点から正のbalanced形式 $\alpha_D$ が得られる。pluriclosed条件と平均化恒等式は $\alpha_D$ が $(n-2)$-Gauduchonであることを導き、最後にprimitive $(2,1)$-形式 $\partial\alpha_D$ のHodge–Riemann形式を用いて $\partial\alpha_D=0$、したがって $\alpha_D$ がKählerであると結論する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.13887](https://arxiv.org/abs/2608.13887)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
