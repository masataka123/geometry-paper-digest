---
layout: paper
title: "Compact balanced threefolds and LCK manifolds with constant holomorphic sectional curvature"
title_ja: "正則断面曲率が一定なコンパクト balanced 三次元多様体と LCK 多様体"
authors: "Shuwen Chen, Junpeng Li"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
topic: differential-geometry
arxiv_id: "2608.05598v1"
arxiv_url: "https://arxiv.org/abs/2608.05598"
arxiv_submitted: "2026-08-06"
arxiv_updated: "2026-08-06"
summary: >-
  非正の一定 Chern 正則断面曲率をもつコンパクト balanced 複素三次元多様体について、曲率ゼロなら Chern 平坦、負なら Kähler であることを示す。さらに LCK 多様体上の Gauduchon 接続および二パラメータ標準計量接続について、非 Kähler 例を Hopf 型へ分類する。
abstract_en: ""
summary_en: >-
  This paper proves the nonpositive part of the constant Chern holomorphic sectional curvature conjecture for compact balanced complex threefolds. Zero curvature forces Chern flatness, whereas negative curvature forces the metric to be Kähler. It also treats pointwise constant holomorphic sectional curvature for Gauduchon and two-parameter canonical metric connections on compact locally conformally Kähler manifolds. The non-Kähler alternatives are described through holomorphic covers by isosceles Hopf manifolds and a distinguished parameter curve.
abstract_ja: >-
  コンパクト balanced 複素三次元多様体で Chern 正則断面曲率が非正の定数となる場合を扱い、ゼロなら Chern 平坦、負なら Kähler であることを証明する。加えて、コンパクト局所共形 Kähler 多様体上の Gauduchon 接続および二パラメータ標準計量接続について、点ごとに一定な正則断面曲率を分類する。非 Kähler の可能性は等脚 Hopf 多様体の正則被覆と特別な接続パラメータに限定される。
abstract_source_url: "https://arxiv.org/abs/2608.05598"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.05598v1](https://arxiv.org/abs/2608.05598)
- **著者:** Shuwen Chen, Junpeng Li
- **初回投稿日:** 2026年8月6日
- **最終更新日:** 2026年8月6日
- **主分類・副分類:** math.DG（副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクト Hermite 多様体の Chern 正則断面曲率が定数 $c$ なら、$c\neq0$ では Kähler、$c=0$ では Chern 平坦になるという予想がある。複素次元2では既知だが、高次元では追加条件なしには未解決である。この論文は、非 Kähler 例を豊富に含む balanced 多様体のうち複素次元3で、$c\le0$ の場合を解く。

結論は明確で、$c=0$ なら Chern 平坦、$c<0$ なら Kähler である。負の場合は局所的に複素双曲空間となる。一方、ゼロの場合には Iwasawa 多様体のような Chern 平坦だが非 Kähler の例があるため、Kähler 性までは主張しない。

論文のもう一つの柱は、LCK 多様体上で Chern と Bismut を補間する Gauduchon 接続、および Levi-Civita 接続も含む二パラメータ族の正則断面曲率である。点ごとに方向に依らない曲率を仮定すると、Kähler でない場合は等脚 Hopf 多様体の正則被覆をもつ場合に限定され、許される接続パラメータも特定される。

## 背景と問題設定

balanced 条件は基本形式 $\omega_g$ に対する

$$
d(\omega_g^{n-1})=0
$$

で定義される。複素三次元では twistor 空間や多くの非 Kähler Calabi–Yau 多様体を含む。Gauduchon 接続は

$$
\nabla^t=\frac{1+t}{2}\nabla^c+\frac{1-t}{2}\nabla^s,
\qquad t\in\mathbb R,
$$

二パラメータの標準計量接続は

$$
D_s^t=(1-s)\nabla^t+s\nabla^{LC}
$$

で与えられる。非 Kähler 計量ではパラメータごとに異なる接続となる。

## 主結果

### balanced 三次元多様体（Theorem 1.1）

$(M^3,g)$ をコンパクト balanced 複素三次元多様体とし、Chern 正則断面曲率が非正の定数 $c$ とする。このとき

- $c=0$ なら $g$ は Chern 平坦である。
- $c<0$ なら $g$ は Kähler であり、定数倍を除いて局所複素双曲的である。

これは balanced 三次元多様体について、一定正則断面曲率予想の非正部分を確立する。

### Gauduchon 接続の LCK 分類（Theorem 1.2）

$(M^n,h)$ を連結コンパクト LCK 多様体とし、$\nabla^t$ の正則断面曲率が点ごとに一定とする。このとき $h$ は Kähler であるか、$(M,h)$ の正則被覆が admissible metric を備えた等脚 Hopf 多様体であり、後者では

$$
t=-1\quad\text{または}\quad t=3
$$

である。曲率が大域的定数 $c$ なら、非 Kähler の場合の計量は定数倍を除いて標準 Hopf 計量で $c=0$ となる。

### 二パラメータ族の LCK 分類（Theorem 1.3）

$D_s^t$ の正則断面曲率が点ごとに一定なら、やはり Kähler であるか等脚 Hopf 型である。非 Kähler の場合、接続パラメータは Chen–Nie 曲線

$$
\Gamma=\{(t,s)\in\mathbb R^2\mid(1-t+ts)^2+s^2=4\}
$$

上になければならない。大域的定数曲率の場合、Hopf 型では標準計量（定数倍を除く）かつ曲率ゼロに限られる。

## 証明の見取り図

LCK 部分では、Introduction が挙げる Huang–Wan および Chen–Zheng の共形曲率計算と、既存の Gauduchon 接続の公式を用いる。Theorems 1.2 と 1.3 は、LCK 計量を大域共形 Kähler と厳密 LCK に分け、非 Kähler の場合に等脚 Hopf 構造を抽出する流れで証明される。balanced 三次元部分は論文後半で Chern torsion の積分恒等式を使うと説明されており、Introduction の範囲では Theorem 1.1 の証明が Sections 7–8 に置かれることまでが示されている。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.05598](https://arxiv.org/abs/2608.05598)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **論文構成の説明:** p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
