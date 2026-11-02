---
layout: paper
title: K-moduli of quasimaps and on quasi-projectivity of moduli of K-stable Calabi-Yau fibrations over curves
title_ja: 準写像のKモジュライとCalabi–Yauファイブレーションの準射影性
authors: Kenta Hashizume, Masafumi Hattori
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: We construct a projective K-moduli space of quasimaps with a certain log Fano condition, which is regarded as a rational map from $\mathbb{P}^1$ to a projective space. Moreover, we investigate relationships between the K-moduli of quasimaps and the K-moduli of Calabi-Yau fibrations over curves of negative Kodaira dimension constructed by the authors when general fibers are Abelian varieties or irreducible holomorphic symplectic manifolds. As an application, we obtain the entire quasi-projectivity of the seminormalization and the ampleness of the CM line bundle on the normalization of the K-moduli space of Calabi-Yau fibrations in this case.
topic: algebraic-geometry
tags:
- moduli
- k-stability
- calabi-yau-geometry
- positivity
- hyperkahler-geometry
arxiv_id: 2504.21519v2
arxiv_url: https://arxiv.org/abs/2504.21519
arxiv_submitted: '2025-04-30'
arxiv_updated: '2026-01-07'
summary: 曲線上のK安定Calabi–Yauファイブレーションのモジュライの準射影性を、準写像のKモジュライを使って調べる。log Fano準写像の射影的good moduli空間を構成し、所定のAbel・シンプレクティックなファイバーを持つ場合には、半正規化の準射影性と正規化上でのCM線束の豊富性を導く。
abstract_en: We construct a projective K-moduli space of quasimaps with a certain log Fano condition, which is regarded as a rational map from $\mathbb{P}^1$ to a projective space. Moreover, we investigate relationships between the K-moduli of quasimaps and the K-moduli of Calabi-Yau fibrations over curves of negative Kodaira dimension constructed by the authors when general fibers are Abelian varieties or irreducible holomorphic symplectic manifolds. As an application, we obtain the entire quasi-projectivity of the seminormalization and the ampleness of the CM line bundle on the normalization of the K-moduli space of Calabi-Yau fibrations in this case.
summary_en: ''
abstract_ja: ファイブレーションの退化に伴ってモジュライ写像の次数が変化する問題を、基点を許す準写像で扱う。まず射影多様体へのK半安定log Fano準写像のモジュライを構成し、豊富なCM線束を備えた射影的good moduli空間を得る。次に、Abel多様体または所定のシンプレクティック多様体を一般ファイバーとするCalabi–Yauファイブレーションのモジュライから準有限射を作り、半正規化の準射影性を示す。断熱極限におけるCM線束の比較も主要な結果である。
abstract_source_url: https://arxiv.org/abs/2504.21519
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2504.21519v2](https://arxiv.org/abs/2504.21519)
- **著者:** Kenta Hashizume, Masafumi Hattori
- **初回投稿日:** 2025-04-30
- **最終更新日:** 2026-01-07
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

K安定なファイブレーションのモジュライは、必ずしも固有ではない。そのため、固有なKモジュライ空間で知られるCM線束の正値性を、そのまま準射影性へ結びつけることは難しい。本論文は、曲線上のCalabi–Yauファイブレーションに対してこの問題を扱う。

鍵となるのは、ファイバーのモジュライを表す写像を、基点を許す準写像として記録することである。普通の写像の次数は族の中で跳ぶことがあるが、その変化を準写像の基点へ吸収できる。著者らはlog Fano準写像のK安定性を定義し、射影的なKモジュライ空間を構成する。

さらに、Abel多様体や所定のシンプレクティック多様体を一般ファイバーとする場合に、ファイブレーションのモジュライの半正規化から準写像のモジュライへの準有限射を得る。この比較により、半正規化の準射影性と、正規化へ引き戻したCM線束の豊富性を示す。元の非正規なモジュライ空間そのものの準射影性と同一視しないことが重要である。

## 背景と問題設定

対象は、全空間が負の小平次元を持つ、曲線上の一様断熱的K安定なklt自明ファイブレーションである。序論では、固定した不変量を持つ偏極付き

$$
f:(X,A)\longrightarrow\mathbb P^1
$$

のモジュライ $M^{\mathrm{CYfib}}$ を用いる。断熱的な偏極は $A-rtK\_X$ と書かれ、$r>0$ を固定して $t$ を大きくする。

ファイバーのモジュライ空間をコンパクト化した先への写像は、退化によって次数が変わりうる。例えば有理楕円曲面では、その次数が同じ既約な族の中で0から12まで変化する。このため、次数を固定した通常の安定写像のモジュライだけではファイブレーションの族を捉えきれない。

## 主結果

### log Fano準写像の射影的Kモジュライ（Theorem 1.2）

閉埋め込み $\iota:X\hookrightarrow\mathbb P^N$ を固定する。数値データを固定した $\mathbb P^1$ から $X$ へのK半安定log Fano準写像のモジュライスタック

$$
\mathcal M\_\iota^{\mathrm{Kss,qmaps}}
$$

は有限型Artinスタックである。さらに、射影的なgood moduli空間 $M\_\iota^{\mathrm{Kps,qmaps}}$ が存在し、その上のCM線束 $\Lambda\_{\mathrm{CM}}^{\mathrm{qmaps}}$ は豊富である。

ここで準写像は、固定した射影埋め込みに関する線形系を通じて有理写像と基点をまとめて記録する。定理は、ファイブレーション側の非固有なモジュライと比較するための射影的な受け皿を与える。

### ファイブレーションのモジュライとの比較（Theorem 1.3）

$V$ を、偏極付きAbel多様体の粗モジュライ空間、または射影的既約正則シンプレクティック多様体へ平滑化可能なシンプレクティック多様体の粗モジュライ空間とする。一般ファイバーが $V$ に属する部分を $M\_V^{\mathrm{CYfib}}$ と書く。

Baily–Borelコンパクト化 $\overline V^{\mathrm{BB}}$ の適切な射影埋め込み $\iota$ に対して、準有限射

$$
\alpha:(M\_V^{\mathrm{CYfib}})^{\mathrm{sn}}
\longrightarrow M\_\iota^{\mathrm{Kps,qmaps}}
$$

が存在する。上付き $\mathrm{sn}$ は半正規化を表す。

正規化から半正規化への射を $\beta$、元の空間への正規化射を $\nu$ とする。偏極 $A-rtK\_X$ に対応するCM線束は、ある $\mu\in\mathbb Q\_{>0}$ に対し

$$
\nu^\ast \Lambda\_{\mathrm{CM},t}
\longrightarrow
\mu\thinspace \beta^\ast \alpha^\ast \Lambda\_{\mathrm{CM}}^{\mathrm{qmaps}}
\quad(t\to\infty)
$$

と、正規化上の $\operatorname{Pic}\_{\mathbb Q}$ において収束する。したがって $(M\_V^{\mathrm{CYfib}})^{\mathrm{sn}}$ は準射影的であり、$t$ が十分大きければ $\nu^\ast \Lambda\_{\mathrm{CM},t}$ は豊富である。

Remark 1.4は、この結論だけでは元の $M\_V^{\mathrm{CYfib}}$ の準射影性を自動的に導けないと注意する。また、標準因子がnefな場合にはこの比較射の準有限性を期待できず、同じ論法の適用範囲ではない。

## 証明の見取り図

準写像側のモジュライにはgood moduli空間の理論を用いる。小さい重みでのK安定性を $\delta$ 不変量などで調べ、一般の重みのスタックを比較することで構成を進める。

ファイブレーション側では、モジュライ写像の基点を判別因子

$$
B=\sum\_{c\in\mathbb P^1}\bigl(1-\operatorname{lct}(X;f^{-1}(c))\bigr)[c]
$$

の倍数として記録する。普通の写像では失われる退化の情報を準写像に残し、そのK安定性をファイブレーションの一様断熱的K安定性と対応させる。

Abel・シンプレクティックなファイバーに関するB半豊富性の既知結果と周期・Hodge理論が、Baily–Borelコンパクト化への比較を支える。最後にCM線束の断熱極限を計算し、準写像側の豊富性を正規化・半正規化したファイブレーションのモジュライへ伝える。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2504.21519)
- **Introduction:** [PDF](https://arxiv.org/pdf/2504.21519v2) — Section 1, pp. 2–6のSection 2直前まで
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.3; Remark 1.4; Example 1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2504.21519v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
