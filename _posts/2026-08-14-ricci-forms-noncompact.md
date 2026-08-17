---
layout: paper
title: "On Ricci forms of canonical metrics over noncompact complex manifolds"
title_ja: "非コンパクト複素多様体上の標準計量のRicci形式"
authors: "Hanzhang Yin"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this paper, we study several types of geometric problems related to the Ricci curvature on
  noncompact complex manifolds, such as the existence of Kähler-Einstein metrics on complete Kähler
  manifolds with negative Ricci curvature, which can be seen as an improvement of the main theorem in
  Cheng-Yau [4]; the existence of canonical Hermitian metrics with prescribed Ricci curvature on
  complete Hermitian manifolds, which can be regarded as noncompact versions of the Gauduchon
  conjecture on certain complete complex surfaces. Our method can also be used to construct
  Hesse-Einstein metrics in affine differential geometry.
topic: differential-geometry
tags:
  - kahler-einstein-metrics
  - curvature
  - noncompact-kahler-geometry
arxiv_id: "2604.19225v1"
arxiv_url: "https://arxiv.org/abs/2604.19225"
arxiv_submitted: "2026-04-21"
arxiv_updated: "2026-04-21"
summary: >-
  非コンパクト複素多様体上で完全標準Hermitian計量のRicci形式を処方する問題を、非線形楕円型方程式の一様評価を通じて扱う。負Ricci曲率を持つ完全Kähler多様体上のKähler–Einstein計量、非コンパクトGauduchon型問題、Hesse–Einstein計量について、具体的な幾何・解析仮定の下で存在一意性を与える。
abstract_en: ""
summary_en: >-
  The paper studies prescribed Chern–Ricci forms for complete canonical Hermitian metrics on noncompact complex manifolds. A general existence theorem for fully nonlinear elliptic equations is used to improve a Cheng–Yau type Kähler–Einstein result by dropping injectivity-radius and higher curvature-derivative assumptions. Further applications construct complete Hermitian metrics under Gauduchon-type conditions and complete Hesse–Einstein metrics in affine differential geometry. The conclusions depend on explicit bounded-geometry, Sobolev, volume, and decay hypotheses stated in the introduction.
abstract_ja: >-
  非コンパクト複素多様体上のRicci曲率に関わる複数の問題を研究する。負Ricci曲率を持つ完全Kähler多様体上のKähler–Einstein計量の存在についてCheng–Yau型定理の仮定を改善し、一定の完全Hermitian多様体上ではRicci曲率を処方した標準計量を構成する。方法はアフィン微分幾何におけるHesse–Einstein計量にも適用される。
abstract_source_url: "https://arxiv.org/abs/2604.19225"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.19225v1](https://arxiv.org/abs/2604.19225v1)
- **著者:** Hanzhang Yin
- **初回投稿日・最終更新日:** 2026年4月21日（v1）
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

中心問題は、完全Hermitian多様体 $M$ 上で与えられた実 $(1,1)$-形式 $\Psi$ に対し、完全な標準Hermitian計量 $\omega$ を

$$
\operatorname{Ric}(\omega)=\Psi
$$

となるよう構成することである。コンパクトKählerの場合のCalabi予想やGauduchon予想に対応する、非コンパクト版の存在問題である。

第一の応用は負曲率のKähler–Einstein計量である。Cheng–Yauの従来結果に必要だった単射半径の下界と曲率の高階共変微分の有界性を外し、曲率テンソルの有界性とRicci曲率の一様な負上界から存在一意性を導く。

解析の中核として、完全非コンパクトHermitian多様体上の一般の完全非線形方程式 $F(A)=h+\epsilon u$ に対する存在一意性定理を置く。これを複素Monge–Ampère方程式や $(n-1)$-Monge–Ampère方程式へ適用し、Gauduchon型条件を持つ計量のRicci形式処方へ進む。

さらに、体積成長・Sobolev不等式・データの減衰を仮定した二つのHermitian存在定理と、Hessian多様体上のHesse–Einstein計量の存在一意性を与える。結論は広いが、各定理の完備性や有界幾何などの仮定を区別する必要がある。

## 背景と問題設定

$\alpha$ を背景Hermitian計量、$\chi$ を実 $(1,1)$-形式とし、$g=\chi+\sqrt{-1}\partial\bar\partial u$ が定める自己準同型の固有値に対して対称関数 $f$ を作用させる。論文は、$f$ の定義錐が凸で正錐を含むこと、単調性・凹性、境界値と右辺の分離、無限遠方向の極限などの構造条件、および $C$-subsolution の存在を課す。

## 主結果

### 負Ricci曲率からのKähler–Einstein計量（Theorem 1.1）

$(M,\alpha)$ が完全Kählerで $|\mathrm{Rm}|<\infty$、ある $c>0$ に対して

$$
\operatorname{Ric}(\alpha)\le-c\alpha
$$

を満たすなら、$M$ はスカラー曲率 $-1$ の一意な完全Kähler–Einstein計量を持つ。Introductionが強調する新規性は、単射半径の正下界と曲率テンソルの共変微分の有界性を仮定しない点である。

### 完全非線形方程式（Theorem 1.3）

$\chi$ が $\alpha$ と一様同値で、torsion、曲率、$\chi$ と $h$ の2階までの導関数が一様有界であり、構造条件と $C$-subsolution 条件を満たすとする。このとき $F(A)=h+\epsilon u$ は一意な滑らかな解を持ち、$\chi+\sqrt{-1}\partial\bar\partial u$ は $\alpha$ と一様同値になる。

### Ricci形式処方とHesse–Einstein計量（Theorems 1.4–1.6）

$\partial\bar\partial\alpha=\partial\bar\partial\alpha^2=0$ の完全Hermitian多様体について、Theorem 1.4はSobolev不等式、Euclid型体積上界、$f$ の減衰と導関数有界性の下で $\Psi=\operatorname{Ric}(\alpha)-\sqrt{-1}\partial\bar\partial f$ を実現する完全計量を構成する。Theorem 1.5は別の体積・減衰仮定で同種の結論を与える。Theorem 1.6は、完全Hessian多様体で背景計量の4階までの導関数が有界かつKoszul形式が一様正なら、一意な完全Hesse–Einstein計量を与える。

## 証明の見取り図

Introductionによれば、まず一般の完全非線形方程式に一様な事前評価を確立する。その枠組みに対数型の複素Monge–Ampère作用素を代入してKähler–Einstein問題を解き、既存の $L^\infty$ 評価と組み合わせてHermitianのRicci処方へ応用する。最後に同じ事前評価を実Monge–Ampère方程式へ移し、Hesse–Einstein計量を構成する。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.19225v1](https://arxiv.org/abs/2604.19225v1)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中の主要結果:** Theorems 1.1, 1.3, 1.4, 1.5, 1.6
- **論文構成:** Sections 3–4で事前評価とTheorems 1.1, 1.3、Section 5でTheorems 1.4, 1.5、Section 6でTheorem 1.6
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
