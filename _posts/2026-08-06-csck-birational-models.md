---
layout: paper
title: "CscK metrics on birational models of projective varieties"
title_ja: "射影多様体の双有理モデル上の cscK 計量"
authors: "Zakarias Sjöström Dyrefelt"
topic: complex-geometry
arxiv_id: "2608.03572v1"
arxiv_url: "https://arxiv.org/abs/2608.03572"
arxiv_submitted: "2026-08-04"
arxiv_updated: "2026-08-04"
arxiv_categories: "math.DG, math.AG"
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

- **arXiv:** [arXiv:2608.03572](https://arxiv.org/abs/2608.03572)
- **著者:** Zakarias Sjöström Dyrefelt
- **初回投稿日:** 2026年8月4日
- **最終更新日:** 2026年8月4日（v1）
- **主分類・副分類:** Differential Geometry (math.DG), Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## イントロダクションの日本語要約

複素多様体上の標準計量の存在は Kähler 幾何の中心問題であり、定スカラー曲率 Kähler（cscK）計量は Yau--Tian--Donaldson 対応を通じて安定性と結びつく。本論文は、元の多様体に計量や安定性を仮定せず、双有理修正そのものによって cscK 計量の存在を保証できるかを問う。

第一の主結果は非常に包括的で、任意の複素射影多様体 $X$ に対し、cscK 計量をもつ滑らかな射影多様体 $\widetilde X$ からの射影双有理射 $\widetilde X\to X$ が存在すると述べる（Theorem 1.1）。特異な $X$ についてはまず特異点解消を行うため、本質的な構成は滑らかな場合にある。

滑らかな $n$ 次元射影多様体 $X$ と、$K_X+H$ も ample となる very ample 線束 $H$ を取る。$|H|$ の一般 Lefschetz pencil の滑らかな余次元 2 基点 $Z$ を blowup すると、Lefschetz fibration $f:\widetilde X\to\mathbb P^1$ が得られる。fiber class を $F$、相対標準類を $\Theta=c_1(K_{\widetilde X/\mathbb P^1})$ とすると、$\Theta$ は Kähler 類であり、十分小さい正の有理数 $\varepsilon$ に対して $F+\varepsilon\Theta$ に cscK 計量が存在する（Theorem 1.2）。

任意の ample 線束の十分大きい冪を $H$ に選べるので、この操作は広く適用できる。曲面では $Z$ は有限個の点となり、「任意の複素射影曲面を十分多くの点で blowup すれば cscK 計量をもつ」という folklore 予想を具体的に解く。

Fano 多様体では $|-mK_X|$ の一般 pencil を選べ、固定次元なら boundedness により $m$ と中心の数値的規模を一様にできる。また射影的な Fano K-moduli 空間の各既約成分にも、cscK 計量をもつ滑らかな射影双有理モデルが得られる。ただし $\varepsilon$ をどこまで大きくできるかの有効評価は、delta invariant に対する断熱定理の有効化に依存する将来課題である。

従来の blowup 上の cscK 計量構成は、すでに標準計量をもつ多様体からの gluing による摂動的手法が中心だった。本論文は gluing を使わず、Mabuchi K-energy の coercivity を直接証明して Chen--Cheng の存在定理を適用する。

鍵は Lefschetz pencil が blowup 中心、fibration、polarization を同時に選ぶ点にある。Hattori の断熱的 entropy 評価と、curve 上の fibration に対する slope stability threshold の明示計算を組み合わせ、energy 項と entropy 項を同時に制御する。

## 論文の主要ポイント

- 任意の複素射影多様体に cscK 計量をもつ滑らかな射影双有理モデルが存在する（Theorem 1.1）。
- 滑らかな場合、十分正な Lefschetz pencil の余次元 2 基点の一回の blowup でモデルを得る（Theorem 1.2）。
- cscK 類は $F+\varepsilon\Theta$ と明示され、$0<\varepsilon\ll1$ の有理数で存在する。
- 曲面の point-blowup 予想を解き、Fano 多様体や Fano K-moduli 空間への帰結を与える。
- gluing ではなく Mabuchi 汎関数の coercivity、slope 計算、断熱 entropy 極限を用いる。

## 論文の構成

Section 2 で coercivity、energy・entropy threshold、Lefschetz pencil、断熱定理を準備する。Section 3 で slope threshold の最適不安定化部分多様体を求め、Section 4 で主定理を証明し、Section 5 で曲面、Fano 多様体、K-moduli、射影空間の例を扱う。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.03572](https://arxiv.org/abs/2608.03572)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.2
- **論文構成の説明:** Introduction, p. 5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
