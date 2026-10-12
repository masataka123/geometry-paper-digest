---
layout: paper
title: Normal bundles of hyperelliptic curves and uniform propagation of semistability
title_ja: 超楕円曲線の法束の半安定性と有限個の検証への帰着
authors: Xuyan Liu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'Let $C$ be a smooth hyperelliptic curve of genus $g\ge2$ over an algebraically closed field of characteristic zero. We prove that the normal bundle of the embedding of $C$ in $\mathbb{P}^n$, $n\ge3$, by the complete linear series of a general line bundle of degree $n+g$ is semistable if and only if $n\ge3g+1$. By openness, general complete embeddings of general curves of genus $g$ also have semistable normal bundle when $n\ge3g+1$. We then show that a general nonspecial curve of genus two and degree $d$ in $\mathbb{P}^n$ has semistable normal bundle except when $(n,d)$ is $(3,5)$, $(4,6)$, $(5,7)$ or $(6,8)$. The degenerations used in genus two extend to every genus $g\ge3$: semistability in all nonspecial degrees and dimensions follows from the cases $0\le d-n-g\le4g-4$. Together with a separate estimate for large $n$, this reduces semistability in each fixed genus to finitely many cases. The proofs combine degenerations to reducible nodal curves, explicit bounds on the
  degrees of subsheaves, and, in genus two, finitely many exact computations, which are provided as ancillary files.'
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- stability
arxiv_id: 2610.12854v1
arxiv_url: https://arxiv.org/abs/2610.12854
arxiv_submitted: '2026-10-09'
arxiv_updated: '2026-10-09'
summary: 超楕円曲線の一般の完全線形系による射影空間への埋め込みについて、法束の半安定性の鋭い次元条件を求める。種数2では一般の非特殊な埋め込みの例外を四つに分類し、高い種数では次数と次元にまたがる問題を固定種数ごとの有限個の検証へ帰着する。
abstract_en: ''
summary_en: Normal bundles measure how an embedded curve can move in the surrounding projective space. Liu determines an exact semistability threshold for complete embeddings of hyperelliptic curves and resolves the nonspecial genus-two case. In higher genus, two propagation estimates replace an infinite collection of questions by a finite verification problem. The argument controls degrees in every rank and uses varying determinants to rule out destabilizing bundles.
abstract_ja: 曲線の法束に平均より正の部分束が現れるかを、超楕円曲線の完全埋め込みと一般の非特殊な埋め込みについて調べる。前者では固定した任意の超楕円曲線に対して正確な次元の閾値を得る。後者では種数2を四つの不安定な例外を除いて解決し、種数3以上では有限幅の次数範囲への伝播と大きな次元での評価を組み合わせる。退化の極限そのものが不安定でも、候補部分束の行列式を動かすことで一般の曲線の半安定性を導く点が重要となる。
abstract_source_url: https://arxiv.org/abs/2610.12854
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.12854v1](https://arxiv.org/abs/2610.12854)
- **著者:** Xuyan Liu
- **初回投稿日:** 2026-10-09
- **最終更新日:** 2026-10-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影空間内の曲線の法束は、曲線に沿う法方向の変形を記録する。その半安定性は、どの法方向の部分族も平均より強い正値性を持たないという条件であり、曲線の埋め込みの幾何を反映する。

本論文はまず、任意に固定した超楕円曲線を一般の線束の完全線形系で埋め込む場合を扱う。低い次元では超楕円写像から生じるscrollが不安定化部分束を与え、高い次元ではそれ以外の不安定化も起こらないことを示す。

種数2では不完全線形系も含めて四つの例外以外で半安定性が成り立つ。種数3以上については全面的な分類を主張せず、次数の有限幅の範囲と大きな次元の評価を組み合わせ、各種数の有限個の問題に帰着する。

## 背景と問題設定

<p>標数0の代数閉体上で、$C\subset\mathbb P^n$ を種数 $g$、次数 $d$ の滑らかな非退化曲線、$n\ge3$ とする。法束 $N_C$ は</p>

<div>
$$
\operatorname{rk}N_C=n-1,\qquad \deg N_C=(n+1)d+2g-2
$$
</div>

<p>を満たす。傾き $\mu(E)=\deg E/\operatorname{rk}E$ を用い、すべての非零部分層 $S\subset E$ で $\mu(S)\le\mu(E)$ なら半安定という。一般の非特殊な埋め込みとは、一般の曲線、$H^1(C,L)=0$ を満たす一般の次数 $d$ の線束、一般の $(n+1)$ 次元切断空間からなる埋め込みである。この場合 $d\ge n+g$ で、等号は完全線形系に対応する。</p>

## 主結果

### 主定理1：超楕円曲線の鋭い閾値（Introduction §1.1、Theorem 2.1）

<p>任意の滑らかな超楕円曲線 $C$、$g\ge2$、$n\ge3$ に対し、一般の次数 $n+g$ の線束の完全線形系による埋め込みの法束は</p>

<div>
$$
N_C\text{ が半安定}\quad\Longleftrightarrow\quad n\ge3g+1
$$
</div>

<p>を満たす。超楕円写像のファイバーを張る直線が曲面scroll $X$ を作り、$\deg N_{C/X}=4g+4$ の部分線束が $n\le3g$ では不安定化する。新しい内容は、閾値以上で他の不安定化部分束も存在しない点である。開性から一般の種数 $g$ の曲線の一般の完全埋め込みにも $n\ge3g+1$ で半安定性が従うが、一般曲線について逆は主張しない。</p>

### 主定理2：種数2の分類（Introduction §1.1、Theorem 5.1）

<p>$n\ge3$、$d\ge n+2$ の一般の非特殊な種数2曲線の法束は</p>

<div>
$$
(n,d)\notin\{(3,5),(4,6),(5,7),(6,8)\}
$$
</div>

<p>のとき、かつそのときに限り半安定である。さらに $\gcd(n-1,2d+2)=1$ なら安定である。四つの例外はscrollによる既知の不安定な完全埋め込みであり、本論文は残る非特殊な埋め込み全体を処理する。</p>

### 主定理3：固定種数での有限検証（Introduction §1.1、Theorems 8.1, 9.3, 10.1）

<p>$g\ge3$、$c=d-n-g\ge0$ とする。すべての $n\ge3$ で $0\le c\le4g-4$ の半安定性が分かれば、すべての $c\ge0$ に伝播する。また独立に</p>

<div>
$$
n\ge10g^2-10g+4+(5g-3)c
$$
</div>

<p>なら半安定である。二つを合わせれば、固定種数について有限個の $(n,d)$ を調べればよい。例えば $g=3$ なら $0\le c\le8$、$n\le159$ の範囲に帰着する。ただし残った有限個のケースの半安定性を、この定理だけで決定するものではない。</p>

## 証明の見取り図

部分層の傾きだけでなく、各階数で可能な次数の整数上限をdegree profileとして追跡する。拡大列の核と商のprofileから中間の束を制御し、切り上げと切り下げの差で生じる半安定性への隙間を埋める。

完全埋め込みではWeierstrass点からの射影とscrollの幾何を用い、次元について帰納する。不完全埋め込みでは直線を付け加えた節点曲線への退化と射影を組み合わせる。極限の束に不安定化部分束が残っても、その候補の行列式が退化の選び方に応じて動くことを利用し、一般の束の固定した不安定化部分束がそこへ特殊化する可能性を排除する。

種数2の帰納の初期ケースには有限体上の正確な線形代数による有限個の検証も用いる。Introductionは22種類のコホモロジー検証と有限の整数計算を明示している。本記事はその役割を説明するにとどまり、添付プログラムの実行や検証は行っていない。

## 原論文との対応

- **Abstractページ:** [Normal bundles of hyperelliptic curves and uniform propagation of semistability](https://arxiv.org/abs/2610.12854)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.12854v1) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Introduction §1.1に述べられたTheorems 2.1, 5.1, 8.1, 9.3, 10.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.12854v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
