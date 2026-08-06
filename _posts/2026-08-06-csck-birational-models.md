---
layout: paper
title: "CscK metrics on birational models of projective varieties"
title_ja: "射影多様体の双有理モデル上の cscK 計量"
authors: "Zakarias Sjöström Dyrefelt"
topic: differential-geometry
arxiv_id: "2608.03572v1"
arxiv_url: "https://arxiv.org/abs/2608.03572"
arxiv_submitted: "2026-08-04"
arxiv_updated: "2026-08-04"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
summary: >-
  任意の複素射影多様体が定スカラー曲率 Kähler 計量をもつ滑らかな射影多様体と双有理であることを証明する。滑らかな場合には十分正な Lefschetz pencil の余次元 2 基点を一度 blowup し、明示的な断熱的 Kähler 類に cscK 計量を構成する。
abstract_en: ""
summary_en: >-
  The paper shows that every complex projective variety has a smooth birational model carrying a constant scalar curvature Kähler metric. For a smooth starting variety, the model is obtained by blowing up the codimension-two base locus of a sufficiently positive general Lefschetz pencil. The relevant rational Kähler classes combine the fiber class with a small multiple of the relative canonical class. The argument proves coercivity of the Mabuchi functional through slope calculations and an adiabatic entropy estimate, rather than by gluing an existing canonical metric.
abstract_ja: >-
  全ての複素射影多様体について、cscK 計量をもつ滑らかな射影双有理モデルが存在することを示す。滑らかな多様体から出発する場合、そのモデルは十分正な一般 Lefschetz pencil の余次元 2 基点の blowup であり、fiber class と相対標準類からなる小パラメータの有理 Kähler 類に cscK 計量が存在する。特に射影曲面を十分多くの適切な点で blowup すれば cscK 計量をもつという問題を解決する。
abstract_source_url: "https://arxiv.org/abs/2608.03572"
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.03572v1](https://arxiv.org/abs/2608.03572)
- **著者:** Zakarias Sjöström Dyrefelt
- **初回投稿日:** 2026年8月4日
- **最終更新日:** 2026年8月4日（v1）
- **主分類・副分類:** Differential Geometry (math.DG), Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

定スカラー曲率 Kähler（cscK）計量の存在は、標準計量と代数幾何的安定性を結ぶ Kähler 幾何の中心問題である。従来、blowup 後の cscK 計量は、すでに標準計量をもつ多様体から gluing で構成する摂動的結果が中心だった。本論文は、元の射影多様体に計量や安定性を仮定せず、双有理修正によって cscK 計量の存在そのものを保証できるかを問う。

第一の結論は、任意の複素射影多様体が cscK 計量をもつ滑らかな射影多様体と双有理になるという包括的な存在定理である。特異な出発点には特異点解消を用い、本質的な構成は滑らかな射影多様体上の十分正な Lefschetz pencil から得られる。

滑らかな場合には、一般 Lefschetz pencil の滑らかな余次元 $2$ 基点を一度 blowup する。その結果得られる fibration の fiber class と相対標準類を組み合わせた明示的な断熱 Kähler 類に、十分小さい正の有理パラメータについて cscK 計量が存在する。元の多様体が不安定でも構成できる点が、既存計量を変形する従来法との違いである。

曲面では blowup 中心が有限個の点となり、任意の複素射影曲面を適切な十分多くの点で blowup すれば cscK 計量を得るという folklore 予想を解く。一方、許される断熱パラメータの有効な大きさは与えられず、Hattori の delta invariant に関する断熱定理の有効化が将来課題として残る。

## 背景と問題設定

$X$ を滑らかな複素射影多様体、$H$ を very ample 線束とし、$K_X+H$ も ample と仮定する。$|H|$ の一般 Lefschetz pencil $|W|$ は滑らかな余次元 $2$ 基点 $Z\subset X$ をもち、その blowup

$$
\pi:\widetilde X=\operatorname{Bl}_Z X\longrightarrow X
$$

には Lefschetz fibration $f:\widetilde X\to\mathbb P^1$ が付随する。Introduction の記法に従い、fiber の共通因子類と相対標準類を

$$
F=f^*c_1\!\left(\mathcal O_{\mathbb P^1}(1)\right),
\qquad
\Theta=c_1\!\left(K_{\widetilde X/\mathbb P^1}\right)
$$

と置く。この幾何的選択が blowup 中心、fibration、polarization を一つの組として結び付ける。

## 主結果

### cscK 双有理モデルの存在（Theorem 1.1）

任意の複素射影多様体 $X$ に対して、滑らかな射影多様体 $\widetilde X$ と射影双有理射

$$
\mu:\widetilde X\longrightarrow X
$$

が存在し、$\widetilde X$ は有理 Kähler 類に cscK 計量をもつ。元の $X$ に cscK 計量や安定性を仮定しないことが、この定理の主要な強さである。

### Lefschetz pencil による具体化（Theorem 1.2）

$X$ を滑らかな $n\geq2$ 次元複素射影多様体とし、上記の $H$, $Z$, $\pi$, $f$, $F$, $\Theta$ を取る。このとき $\Theta$ は Kähler 類であり、十分小さいすべての正の有理数 $\varepsilon$ に対して

$$
\Omega_\varepsilon=F+\varepsilon\Theta
$$

は cscK 計量を含む。したがって滑らかな場合、Theorem 1.1 の双有理射は十分正な一般 Lefschetz pencil の余次元 $2$ 基点の一回の blowup として選べる。

任意の ample 線束 $A$ に対して $H=kA$ を十分大きく取れば仮定を満たせるため、構成は任意の滑らかな射影多様体に適用できる。ただし「十分小さい」$\varepsilon$ の有効範囲は Introduction では未解決とされている。

### 曲面およびその他の帰結

曲面では $Z$ は相異なる有限個の点である。Introduction は、very ample な $A$ に対して一般 pencil $|4A|$ の $16A^2$ 個の基点を同時に blowup すれば、$0<\varepsilon\ll1$ の $\Omega_\varepsilon$ に cscK 計量が存在すると述べる。Fano 多様体では十分正な $|-mK_X|$ を使え、射影的 Fano K-moduli 空間の既約成分にも滑らかな cscK 双有理モデルが得られる。

## 証明の見取り図

本論文は gluing を用いず、指定した $\Omega_\varepsilon$ に対する Mabuchi K-energy の coercivity を証明し、Chen--Cheng の存在定理から cscK 計量を得る。Lefschetz pencil の選択により、energy 項と entropy 項を同時に制御できる幾何が作られる。

Introduction によれば、entropy 側は Hattori の断熱定理で評価し、energy 側は Gao Chen の結果に基づく slope stability threshold を、曲線上の fibration、特にこの Lefschetz fibration について明示計算する。中心・fibration・断熱偏極を一体として選んだ結果、最後は正確な slope 計算と断熱 entropy 極限へ還元される。特異な $X$ に対する Theorem 1.1 は、特異点解消後に Theorem 1.2 を適用して得られる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.03572v1](https://arxiv.org/abs/2608.03572v1)
- **Introduction:** Section 1, pp. 1--5
- **主要定理:** Theorem 1.1, Theorem 1.2
- **応用:** Section 1.1, pp. 3--4
- **証明方針:** Section 1.2, pp. 4--5
- **論文構成:** “Outline of the paper”, p. 5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0
- **source_scope:** Abstract and Introduction
