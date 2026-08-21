---
layout: paper
title: "Notes on rational chain connectedness"
title_ja: "有理鎖連結性に関するノート"
authors: "Osamu Fujino"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We extend Hacon--M\textsuperscript{c}Kernan's rational chain connectedness theorem to the complex analytic setting. As a consequence, we prove that the fibers of any resolution of singularities of complex analytic kawamata log terminal singularities are rationally chain connected. In contrast to the original approach, we avoid the use of extension theorems and instead rely on the minimal model program.
topic: algebraic-geometry
tags:
  - birational-geometry
  - minimal-model-program
  - singularities
  - complex-analytic-spaces
arxiv_id: "2602.19415v4"
arxiv_url: "https://arxiv.org/abs/2602.19415"
arxiv_submitted: "2026-02-23"
arxiv_updated: "2026-07-15"
summary: >-
  Hacon–McKernanの有理鎖連結性定理を複素解析空間の射影射へ拡張する。特に複素解析的klt特異点の任意の特異点解消のファイバーが有理鎖連結となることを導き、元の証明の複雑な拡張定理を直接使う代わりにMMPを前面に出す。
abstract_en: >-
  We extend Hacon--M\textsuperscript{c}Kernan's rational chain connectedness theorem to the complex analytic setting. As a consequence, we prove that the fibers of any resolution of singularities of complex analytic kawamata log terminal singularities are rationally chain connected. In contrast to the original approach, we avoid the use of extension theorems and instead rely on the minimal model program.
summary_en: ""
abstract_ja: >-
  Hacon–McKernanの有理鎖連結性定理を複素解析的設定へ拡張する。その帰結として、複素解析的klt特異点の任意の特異点解消のファイバーが有理鎖連結であることを示す。元の方法と異なり、拡張定理を直接用いず極小モデル・プログラムに依拠する。
abstract_source_url: "https://arxiv.org/abs/2602.19415"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.19415v4](https://arxiv.org/abs/2602.19415)
- **著者:** Osamu Fujino
- **初回投稿日:** 2026-02-23
- **最終更新日:** 2026-07-15
- **主分類・副分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Hacon–McKernanの主要定理は、反標準方向の正値性をもつ射のファイバーが非klt locusを法として有理鎖連結になる条件を与える。本論文はその枠組みを代数多様体から複素解析空間の間の射影射へ移す。

主定理では、$-K_X$ の相対的bignessと $-(K_X+\Delta)$ の相対的semiamplenessのもと、任意の双有理モデルから底へのファイバーの連結成分を制御する。非klt locusの逆像が、鎖の到達先として残る点が一般のlog pairに必要な限定である。

kltの場合にはこの障害が消え、特異点解消を含む任意の双有理射のファイバーが有理鎖連結となる。また有理曲線を含まない空間へのmeromorphic mapが実際にはmorphismになるという応用も得られる。

元の代数的証明の技術的な拡張定理を直接たどらず、複素解析的MMPの標準的議論に置き換えることが方法上の特徴である。ただしIntroductionは、MMPの基礎自体が拡張定理に依存するため、依存関係が完全に消えるわけではないと明記する。

## 背景と問題設定

空間が集合 $V$ を法として有理鎖連結であるとは、各点を $V$ の点へ有理曲線の連結鎖で結べることを意味する。対がkltなら非klt locusは空であり、通常の有理鎖連結性が結論となる。複素解析的設定では相対的big、nef、semiampleを底のStein開集合上で扱う必要がある。

## 主結果

### 複素解析的有理鎖連結性（Theorem 1.1）

$X$ をnormal complex variety、$\Delta$ を $K_X+\Delta$ が $\mathbb R$-Cartierとなる有効因子とし、$f:X\to S$ を複素解析空間の間の射影射とする。$-K_X$ が $f$-big、$-(K_X+\Delta)$ が $f$-semiampleであるとする。任意のbimeromorphic morphism $g:Y\to X$ と合成 $\pi:Y\to S$ に対し、$\pi$ の各ファイバーの連結成分は

$$
g^{-1}(\operatorname{Nklt}(X,\Delta))
$$

を法として有理鎖連結である。

### dlt対とmeromorphic mapへの系（Corollaries 1.2–1.4）

dlt対への任意のbimeromorphic morphismのファイバーは有理鎖連結である。さらにdlt空間から有理曲線を含まない複素解析空間へのmeromorphic mapは不定点をもたずmorphismとなる。

### Fano型の相対ファイバー（Theorems 1.6, 1.7; Corollary 1.8）

$-(K_X+\Delta)$ がampleなnormal projective pairは非klt locusを法として有理鎖連結であり、kltなら有理連結となる。準対数複素解析空間にも同種の相対版があり、Introductionはこれらの一部がTheorem 1.1とは独立に従うことを区別している。

## 証明の見取り図

複素解析的MMPを用いてHacon–McKernanの代数的議論を再構成する。相対basepoint-free theoremで必要なsemiamplenessを確保し、Kodaira次元の不等式とMMPによる判定規準を経て、主要な有理鎖連結性定理へ到達する。Introductionでは技術的な完全版をTheorem 5.1に置き、Theorem 1.1をその直接の帰結として提示している。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.19415](https://arxiv.org/abs/2602.19415)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.6, 1.7; Corollaries 1.2–1.4, 1.8
- **論文構成の説明:** Contents, p. 1
- **確認したarXivバージョン:** v4
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
