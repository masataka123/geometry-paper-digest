---
layout: paper
title: Instability of the Fundamental Group for Ricci-Flat K\"ahler 4-Manifolds
title_ja: Ricci-flat Kähler四次元多様体の極限で基本群が安定しない例
authors: Alejandro Bellati, Ignacio Bustamante
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: |-
  We show that the fundamental group is not locally stable under non-collapsed Gromov--Hausdorff convergence, even among closed Ricci-flat K\"ahler four-manifolds. More precisely, we construct families of Ricci-flat K\"ahler metrics on $K3$ surfaces and Enriques surfaces that converge to the same compact flat orbifold. Using the same mechanism, we further construct two families of closed locally hyperk\"ahler Ricci-flat four-manifolds, with fundamental groups $\mathbb Z_2$ and $\mathbb Z_2\times\mathbb Z_2$, respectively, which converge to the same compact flat orbifold.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- hyperkahler-geometry
- fundamental-groups
- metric-limits
arxiv_id: 2610.05795v1
arxiv_url: https://arxiv.org/abs/2610.05795v1
arxiv_submitted: '2026-10-05'
arxiv_updated: '2026-10-05'
summary: |-
  K3曲面とEnriques曲面上のRicci-flat Kähler計量が、体積を失わず同じ平坦orbifoldへ収束する例を構成する。従って、直径と体積を制御してもGromov–Hausdorff距離が近いだけでは基本群の一致は保証されない。局所hyperkählerな四次元多様体の別の基本群の組合せも扱う。
abstract_en: ''
summary_en: |-
  Finiteness of possible fundamental groups does not imply that the group is locally constant in a space of metrics. This paper demonstrates the distinction within the Ricci-flat Kähler setting using K3 and Enriques surfaces. Their metric families approach one flat orbifold while keeping uniform diameter and volume bounds. A second construction and products with flat tori extend the range of fundamental groups and dimensions exhibiting the same phenomenon.
abstract_ja: |-
  非崩壊Gromov–Hausdorff収束に対する基本群の局所安定性を、Ricci曲率が厳密に0という強い条件の下で調べる。著者らはK3曲面とEnriques曲面上に、共通の平坦四次元orbifoldへ収束するRicci-flat Kähler計量族を構成する。両者の基本群はそれぞれ自明群と位数2の群である。さらに局所hyperkählerなRicci-flat四次元多様体で、基本群が位数2の群とその二重直積になる二つの族も共通極限を持つことを示す。
abstract_source_url: https://arxiv.org/abs/2610.05795v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.05795v1](https://arxiv.org/abs/2610.05795v1)
- **著者:** Alejandro Bellati, Ignacio Bustamante
- **初回投稿日:** 2026-10-05
- **最終更新日:** 2026-10-05
- **主分類・副分類:** math.DG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲率や直径、体積を制御すると、多様体の位相がどこまで制限されるかは比較幾何の基本問題である。基本群の同型類が有限個に限られることは、互いに十分近い計量空間が同じ基本群を持つこととは異なる。本論文はこの違いをRicci-flat Kähler計量の範囲で示す。

具体的には、基本群が自明なK3曲面と、基本群が位数2のEnriques曲面上に計量族を作り、両方が同じ平坦orbifoldへ収束することを示す。計量はRicci-flatで、直径には共通の上界、体積には正の共通下界がある。従って体積崩壊が原因で基本群が不安定になっているわけではない。

第二の構成では、局所hyperkählerな四次元多様体の基本群が位数2の群とその二重直積になる二つの族を扱う。平坦トーラスとの積から高次元にも例が得られるが、正のEinstein定数を持つ四次元多様体の場合や、積によらない高次元の機構は今後の問題として残される。

## 背景と問題設定

下からのRicci曲率評価、直径上界、体積の正の下界の下では、基本群の同型類に有限性がある。一方、Gromov–Hausdorff収束に伴う群の安定性はより強い要求である。Introductionは下からのRicci曲率評価だけの場合の既知の反例を説明し、それをRicci-flatという方程式の下へ強めることを今回の課題とする。

ここで四次元は実次元であり、K3曲面とEnriques曲面は複素二次元である。二つの滑らかな族が共通の特異極限へ近づくことが、異なる基本群を持つ多様体同士の距離を任意に小さくする。

## 主結果

### K3とEnriquesの共通極限（Theorem 1）

<p>
コンパクトな平坦四次元Riemannian orbifold $X$、正定数 $\epsilon_0,v,C$ と、閉多様体上の計量族 $(M,g_\epsilon)$、$(N,h_\epsilon)$ が存在する。$0\lt\epsilon\lt\epsilon_0$ で次を満たす。
</p>

<div>
$$
\operatorname{Ric}_{g_\epsilon}=\operatorname{Ric}_{h_\epsilon}=0,\qquad
\operatorname{vol}_{g_\epsilon}(M),\operatorname{vol}_{h_\epsilon}(N)\ge v,\qquad
\operatorname{diam}_{g_\epsilon}(M),\operatorname{diam}_{h_\epsilon}(N)\le C.
$$
</div>

<p>
両方の族が $\epsilon\to0$ で $X$ へGromov–Hausdorff収束するが、
</p>

<div>
$$
\pi_1(M)\simeq\mathbb Z_2,\qquad \pi_1(N)=1.
$$
</div>

<p>
$M$ はEnriques曲面、$N$ はK3曲面で、両計量族はKählerかつ局所hyperkählerである。既知の下Ricci曲率評価の例と同じ群の違いを、曲率方程式と複素幾何の構造を保って実現する点が新しい。付随するRemarkは、第二Betti数もそれぞれ10と22であり局所安定でないと指摘する。
</p>

### 二つの非自明基本群を持つ族（Theorem 2）

同様に非崩壊・直径有界な閉Ricci-flat四次元多様体の二族が共通の平坦orbifoldへ収束し、その基本群は

<div>
$$
\pi_1(P)\simeq\mathbb Z_2\times\mathbb Z_2,\qquad
\pi_1(M)\simeq\mathbb Z_2
$$
</div>

となる。こちらの定理が明示する構造は局所hyperkähler性であり、Theorem 1の大域的Kähler性をそのまま付け加えない。

### トーラスとの積による高次元化（Corollary 3）

<p>
任意の実次元 $n=4+m\ge4$ で、同じ型の非崩壊Ricci-flat極限に近づく族を得る。基本群の組は $\mathbb Z^m$ と $\mathbb Z_2\times\mathbb Z^m$、または $\mathbb Z_2\times\mathbb Z^m$ と $\mathbb Z_2\times\mathbb Z_2\times\mathbb Z^m$ である。これは固定した平坦 $m$ 次元トーラスとの積による帰結である。
</p>

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2610.05795v1
- **Introduction:** Section 1、pp. 1–5。
- **主要定理:** Theorems 1、2、Corollary 3。Theorem 1直後のRemarkが第二Betti数を述べる。
- **論文構成:** Section 2に商と特異点解消の機構・解析的方法、Sections 3–4に二つの定理の証明を配置する。Introductionは具体的解析を展開しないため、証明の詳細は本記事で再構成しない。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction
