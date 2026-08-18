---
layout: paper
title: "Holomorphic Bergman isometries between bounded domains and the extension of Lu's theorem"
title_ja: "有界領域間の正則Bergman等長写像とLuの定理の拡張"
authors: "Yuan Yuan"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  We study holomorphic maps between complex manifolds that preserve the Bergman metric up to a positive constant. In the equal dimensional case, either the source is a Stein manifold and the target is a bounded domain in the complex Euclidean space, or the source is a bounded pseudoconvex domain and the target is a complex manifold, holomorphic Bergman isometry is a biholomorphism onto the complement of a relatively closed locally pluripolar set, and the constant is necessarily one. These include the bounded domains in the complex Euclidean space as special cases. Some applications to curvature-preserving maps are obtained. We further prove the rigidity result for local holomorphic Bergman isometries into Cartesian product of strongly pseudoconvex domains, with applications to finite analytic and modular correspondences.
topic: several-complex-variables
tags:
  - stein-geometry
  - curvature
arxiv_id: "2608.15991v1"
arxiv_url: "https://arxiv.org/abs/2608.15991"
arxiv_submitted: "2026-08-17"
arxiv_updated: "2026-08-17"
summary: >-
  同次元複素多様体間でBergman計量を定数倍まで保つ正則写像が、pluripolar集合を除いた双正則同型になることを示す。
  Luの一意化定理を写像論的に拡張し、強擬凸領域の直積への局所等長写像にも成分ごとの剛性を得る。
abstract_en: ""
summary_en: >-
  The paper studies equidimensional holomorphic maps that preserve Bergman metrics up to scale. Under Stein or bounded-pseudoconvex hypotheses, such a map is shown to be a biholomorphism onto the complement of a locally pluripolar set, and the scale is forced to be one. Local versions extend germs of Bergman isometries under completeness assumptions. A separate product theorem proves componentwise rigidity for maps into Cartesian powers of a strongly pseudoconvex domain.
abstract_ja: >-
  複素多様体間でBergman計量を正定数倍まで保つ正則写像を研究する。同次元の場合、sourceがSteinでtargetが有界領域である場合、またはsourceが有界擬凸領域でtargetが複素多様体である場合に、写像は相対閉局所pluripolar集合の補集合への双正則同型となり、倍率は必ず1になる。さらに強擬凸領域の直積への局所Bergman等長写像に対する剛性と、有限解析対応・modular対応への応用を与える。
abstract_source_url: "https://arxiv.org/abs/2608.15991"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.15991](https://arxiv.org/abs/2608.15991)
- **著者:** Yuan Yuan
- **初回投稿日:** 2026年8月17日
- **最終更新日:** 2026年8月17日（v1）
- **主分類・副分類:** math.CV（主分類。副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Luの古典的一意化定理は、完備Bergman計量が一定の正則断面曲率を持つ有界領域を単位球として特徴づける。近年は完備性を外す代わりに、Bergman空間から見えないpluripolar集合を球から除くという結論が適切だと分かってきた。

本論文はこの思想を曲率条件から写像へ移し、Bergman計量を正定数倍まで保つ正則写像の大域的剛性を証明する。同次元でStein性または有界擬凸性を仮定すると、写像はtargetの局所pluripolar集合を除いた部分への双正則同型となり、あらかじめ許した倍率も実際には $1$ に限られる。

局所写像についても、targetのBergman計量が完備であるなどの条件のもとで、全体の双正則写像へ延長される。これは局所的なBergman幾何が、薄い欠損集合を除いて大域的複素構造を決めることを意味する。

さらに、単一の等長写像だけでなく、強擬凸領域の直積への写像を扱う。pullback計量の和が元のBergman計量の定数倍なら、各成分が領域の自己同型へ延長するという成分ごとの剛性を得る。

## 背景と問題設定

Bergman計量のKähler形式を $\omega_M$ とする。正則写像 $f:M_1\to M_2$ が

$$
f^*\omega_{M_2}=\lambda\omega_{M_1},\qquad\lambda>0
$$

を満たすとき、論文はこれを正則Bergman等長写像と呼ぶ。$\lambda=1$ の場合がbona fideな等長写像である。

先行研究は有界対称領域の等長埋め込みにおける代数性・延長・剛性と、Lu型一意化の二方向から発展してきた。本論文は一般の有界領域やStein多様体へ前者の写像論を広げ、後者で現れるpluripolarな欠損を最適な結論として組み込む。

## 主結果

### 有界擬凸領域間の剛性（Theorem 1.1）

$D_1,D_2\subset\mathbb C^n$ を有界領域とし、$D_1$ を擬凸とする。正則写像 $f:D_1\to D_2$ が

$$
f^*\omega_{D_2}=\lambda\omega_{D_1}
$$

を満たすなら、$D_2$ の相対閉pluripolar集合 $E$ が存在し、$f:D_1\to D_2\setminus E$ は双正則である。さらに $\lambda=1$ である。

### Stein多様体を含む拡張（Theorems 1.2, 1.3）

Theorem 1.2ではsourceをBergman計量が定義された同次元Stein多様体、targetを有界領域として同じ結論を得る。逆向きに、sourceを有界擬凸領域、targetをBergman--Bochner mapがimmersionとなる複素多様体とするTheorem 1.3でも、相対閉局所pluripolar集合の補集合への双正則性と $\lambda=1$ を示す。

### 局所写像の延長（Theorems 1.4, 1.5）

一方のBergman計量の完備性と必要な点分離性のもとで、連結開集合上の局所Bergman等長写像は、pluripolar集合を除いた全体の双正則写像へ延長する。

### 直積への成分剛性（Theorem 1.6）

$D\Subset\mathbb C^n$ を単連結・有界・強擬凸で、境界が実解析的とする。開集合 $U\subset D$ 上の正則写像 $f_j:U\to D$ がそれぞれどこかでfull rankを持ち、

$$
\sum_{j=1}^m f_j^*\omega_D=\lambda\omega_D
$$

なら、各 $f_j$ は $\operatorname{Aut}(D)$ の元へ延長し、$\lambda=m$ となる。

## 証明の見取り図

Bergman--Bochner mapによってBergman計量を射影Hilbert空間のFubini--Study形式のpullbackとして捉え、Calabiのdiastasisから正則Bergman等長写像の単射性を得る。局所写像の解析接続にはMokとHuang--Liの延長定理を用いる。

大域化ではCalabi型延長、covering Riemann domain上のmonodromyの処理、Irgensの $L^2$ 正則包、Josefsonの定理を組み合わせる。直積定理では境界を越える解析接続とNemirovski--Shafikovの一意化を用いて、各成分を自己同型へ昇格させる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.15991](https://arxiv.org/abs/2608.15991)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.6
- **論文構成の説明:** Introductionでは節ごとの構成説明なし
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
