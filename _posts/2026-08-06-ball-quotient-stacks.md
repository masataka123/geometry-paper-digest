---
layout: paper
title: "A characterization of ball quotient stacks"
title_ja: "球商スタックの特徴づけ"
authors: "Chirantan Chowdhury, Matteo Costantini, Aryaman Patel"
topic: algebraic-geometry
arxiv_id: "2608.04688v1"
arxiv_url: "https://arxiv.org/abs/2608.04688"
arxiv_submitted: "2026-08-05"
arxiv_updated: "2026-08-05"
arxiv_categories: "math.AG"
summary: >-
  対数 Higgs 束の多重安定性と Chern 類等式から、滑らかで固有な Deligne--Mumford スタックの開部分が複素単位球の商になることを特徴づける。逆に任意の球商スタックについて、境界が有限群による Abel 多様体の商の非交和となる滑らかな固有コンパクト化を構成する。
abstract_en: >-
  We characterize smooth proper Deligne-Mumford stacks $\mathscr{X}$ that arise as compactifications of ball quotient stacks $[\mathbb{B}^d/Γ]$. Moreover, we show that every ball quotient admits a compactification whose boundary divisor $\mathscr{D}:=\mathscr{X}-[\mathbb{B}^d/Γ]$ is a disjoint union of quotient stacks $[A/G]$, where $A$ is an abelian variety and $G$ is a finite group. This generalizes a result of Deng-Cadorel. Our strategy combines Simpson's non-abelian Hodge correspondence for smooth proper DM-stacks, Mochizuki's generalization of the classical Simpson's correspondence to the log setting, and the uniformization results of Deng-Cadorel.
summary_en: ""
abstract_ja: >-
  滑らかで固有な Deligne--Mumford スタックが複素単位球の商スタックのコンパクト化となるための特徴づけを与える。また、任意の球商には、境界因子が Abel 多様体を有限群で割ったスタックの非交和となるコンパクト化が存在することを示す。方法は、スタック上および対数的設定での非可換 Hodge 対応と既存の一意化定理を組み合わせる。
abstract_source_url: "https://arxiv.org/abs/2608.04688"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.04688](https://arxiv.org/abs/2608.04688)
- **著者:** Chirantan Chowdhury, Matteo Costantini, Aryaman Patel
- **初回投稿日:** 2026年8月5日
- **最終更新日:** 2026年8月5日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

## イントロダクションの日本語要約

複素単位球 $\mathbb{B}^d$ の格子による商は、負曲率と代数幾何を結ぶ重要な一意化空間である。本論文は Deng--Cadorel による準射影球商の特徴づけを、有限安定化群を許す滑らかな Deligne--Mumford（DM）スタックへ拡張する。

スタック上でベクトル束の安定性を扱うため、著者らは滑らかな射影多様体からなる proper hypercovering を用いる。境界 $D$ の引き戻しも単純正規交差になる「good covering」を構成し、その上への引き戻しが slope-(semi)stable であることによってスタック上の安定性を定める。この仕組みにより、粗モジュライ空間の射影性を最初から仮定せずに Simpson の方法を利用できる。

第一の主結果では、滑らかで固有な $d$ 次元 DM スタック $\mathscr X$、単純正規交差境界 $D$、good covering $f:Z_\bullet\to\mathscr X$ を考える。自然な対数 Higgs 束 $\Omega^1_{\mathscr X}(\log D)\oplus\mathcal O_{\mathscr X}$ が多重安定なら、Introduction に記された Chern 類不等式が成り立つ。

さらに $D$ が滑らかで、その不等式が等号になるとき、開スタックは $\mathscr X-D\simeq[\mathbb B^d/\Gamma]$ と球商で一意化される（Theorem 1.1）。境界が単に単純正規交差で滑らかでない場合には同じ結論が一般には成立しないため、滑らかさの仮定は実質的である。

粗モジュライ空間が射影的なら、この特徴づけから得られるコンパクト化の境界は、Abel 多様体を有限群で割った商の非交和になる。これは球商の cusp の幾何をスタックとして記述するものでもある。

逆方向として、任意の格子 $\Gamma\subset PU(d,1)$ に対し、$[\mathbb B^d/\Gamma]$ はそのような滑らかな固有 DM コンパクト化をもつ（Theorem 1.3）。そこでは対数余接束の Chern 類等式が成立し、自然な対数 Higgs 束は任意の good covering 上の ample polarization に関して多重安定になる。

証明の基盤として、滑らかな固有 DM スタック上の対数 Higgs 束に対する Simpson--Mochizuki 型対応も確立する。したがって本論文の新規性は球商の判定だけでなく、スタック上の非可換 Hodge 理論を一意化へ接続する枠組みにある。

## 論文の主要ポイント

- good covering を用いて滑らかな固有 DM スタック上の対数 Higgs 束の安定性を定式化する。
- 自然な対数 Higgs 束の多重安定性から Chern 類不等式を導く（Theorem 1.1）。
- 境界が滑らかで等号が成立すれば、開スタックが球商 $[\mathbb B^d/\Gamma]$ であることを示す。
- 任意の球商スタックに、境界が $[A/G]$ 型の非交和となるコンパクト化を与える（Theorem 1.3）。
- スタックの対数的設定で Simpson--Mochizuki 対応を構成する。

## 論文の構成

Section 2 で対数 Higgs 束を導入し、Section 3 で good covering を構成する。Section 4 で対数的 Simpson--Mochizuki 対応を扱い、Section 5 で球商の特徴づけとコンパクト化を証明する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.04688](https://arxiv.org/abs/2608.04688)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Remark 1.2, Theorem 1.3, Theorem 4.1
- **論文構成の説明:** Introduction, pp. 1–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
