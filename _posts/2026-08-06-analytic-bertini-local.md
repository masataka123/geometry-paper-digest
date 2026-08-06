---
layout: paper
title: "Analytic Bertini theorem II --- The local case"
title_ja: "解析的Bertini定理 II――局所版"
authors: "Mingchen Xia"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
topic: algebraic-geometry
arxiv_id: "2607.25230v1"
arxiv_url: "https://arxiv.org/abs/2607.25230v1"
arxiv_submitted: "2026-07-28"
arxiv_updated: "2026-07-28"
summary: >-
  多重劣調和関数の乗数イデアルを一般のファイバーへ制限したとき、ファイバー上で直接作る乗数イデアルと一致することを、例外集合を多重極集合にまで精密化して示す。局所解析的Bertini定理についてのBoucksomの予想を解決し、一般の正則写像にも拡張する。
abstract_en: >-
  We prove the local analytic Bertini theorem, confirming a conjecture of Boucksom in full generality.
summary_en: ""
abstract_ja: >-
  局所解析的Bertini定理を証明し、Boucksomの予想を完全な一般性で肯定的に解決する。
abstract_source_url: "https://arxiv.org/abs/2607.25230v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.25230v1](https://arxiv.org/abs/2607.25230v1)
- **著者:** Mingchen Xia
- **初回投稿日:** 2026年7月28日
- **最終更新日:** 2026年7月28日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG); Complex Variables (math.CV); Differential Geometry (math.DG)
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

## イントロダクションの日本語要約

代数幾何のBertini定理は、一般のパラメータを選べば切断が望ましい性質を保つという原理である。本論文が扱う解析的類似では、多重劣調和関数 $\Phi$ の特異性を測る乗数イデアル層が、ファイバーへの制限と両立するかを問う。

単位多重円板の積 $X=\Delta_z^m\times\Delta_\eta^n$ と $\Phi\in\operatorname{PSH}(X)$ を考える。主定理（Theorem 1.1）は、多重極集合 $P\subset\Delta_\eta^n$ が存在し、$\eta\notin P$ なら

$$
\mathcal I_X(\Phi)\cdot\mathcal O_{X_\eta}
=
\mathcal I_{X_\eta}(\Phi|_{X_\eta})
$$

が成り立つと述べる。Ohsawa--Takegoshi拡張定理から一方の包含は従い、Fubiniの定理なら例外集合がLebesgue零集合であるところまでは分かる。新しい点は、零集合よりも複素解析的に強い「多重極集合」に例外を抑えることである。

著者は以前、射影的ファイブレーションについてこのBoucksom予想を証明していたが、その議論は直像の正値性に依存し、非コンパクトな局所ファイバーにはそのまま適用できなかった。本論文では直像をjet bundleの議論に置き換え、Berndtsson型の結果を拡張するBao--Guan--Yuanのファイバーごとの重み付きBergman核の対数多重劣調和性を用いる。

中間段階では、あるヒルベルト空間値正則写像族の零点をもつパラメータ集合が多重極的になる判定を構成する（Theorem 3.2およびCorollary 3.5）。ここではplurifine topologyと精密なpluripotential theoryが、ほとんど至る所での非消滅を多重極的例外集合へ格上げする役割を果たす。

さらにCorollary 1.2は、$\sigma$-compactな複素多様体間の一般の正則写像 $f:Y\to Z$ に結論を拡張する。局所多重極集合を除く各パラメータで、ファイバーが複素多様体となり、乗数イデアルの制限公式が成立する。

Introductionでは、この結果を多重劣調和特異点の変形を理解する計画の第一段階と位置づけている。したがって結論は単なる一般位置での等式ではなく、例外集合の複素解析的な小ささを制御する基礎を与える。

## 論文の主要ポイント

- 局所解析的Bertini定理を証明し、Boucksomの予想を完全な一般性で解決する（Theorem 1.1）。
- 乗数イデアルのファイバー制限公式が、多重極集合を除いて成立する。
- Fubiniの定理が与えるLebesgue零集合という結論を、多重極集合へ強化する。
- 非コンパクトな局所問題に対し、jet bundleと重み付きBergman核の対数多重劣調和性を用いる。
- 結論を一般の正則写像へ拡張する（Corollary 1.2）。

## 論文の構成

Section 2で乗数イデアルと重み付きBergman核を準備し、Section 3で多重極的零集合の判定を証明する。Section 4で局所解析的Bertini定理を導き、Section 5で一般の正則写像へ拡張する。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.25230v1](https://arxiv.org/abs/2607.25230v1)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Corollary 1.2, Theorem 3.2, Corollary 3.5
- **論文構成の説明:** Contents, p. 1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
